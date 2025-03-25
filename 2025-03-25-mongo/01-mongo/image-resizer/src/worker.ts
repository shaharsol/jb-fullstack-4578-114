import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { DeleteMessageCommand, ReceiveMessageCommand, SQSClient } from '@aws-sdk/client-sqs'
import { Upload } from '@aws-sdk/lib-storage'
import config from 'config'
import sharp from 'sharp'

const sqsConfig = JSON.parse(JSON.stringify(config.get('sqs.connection')))
const s3Config = JSON.parse(JSON.stringify(config.get('s3.connection')))

if (!config.get<boolean>('sqs.isLocalstack')) delete sqsConfig.endpoint
if (!config.get<boolean>('s3.isLocalstack')) delete s3Config.endpoint

const sqsClient = new SQSClient(sqsConfig)
const s3Client = new S3Client(s3Config)


async function resize(
    photoContent: Uint8Array<ArrayBufferLike>, 
    width: number, 
    height: number,
    key: string,
    bucket: string,
    contentType: string,
    suffix: string
) {
    const resizedImage = await sharp(photoContent)
        .resize(width, height)
        .toBuffer()

    const resizedKey = key.replace('.', `-${suffix}.`)

    const upload = new Upload({
        client: s3Client,
        params: {
            Bucket: bucket,
            Key: resizedKey,
            Body: resizedImage,
            ContentType: contentType
        }
    })                

    const newUploadResponse = await upload.done()
    console.log(newUploadResponse)

}


async function work() {
    while(true) {
        const { Messages } = await sqsClient.send(new ReceiveMessageCommand({
            QueueUrl: config.get<string>('sqs.queueUrl'),
            MaxNumberOfMessages: 1
        }))
        console.log(Messages)
        if (Messages) {
            const { Body, ReceiptHandle } = Messages[0]

            const message = JSON.parse(Body!)

            console.log(message)

            const s3Response = await s3Client.send(new GetObjectCommand({
                Bucket: message.bucket,
                Key: message.key
            }))

            console.log(s3Response)

            const photoContent = await s3Response.Body?.transformToByteArray()

            console.log(photoContent)


            const metadata = await sharp(photoContent).metadata()
            console.log(metadata)
            const { width, height } = metadata;

            try {
                await Promise.all([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9].map(ratio => {
                    resize(
                        photoContent!,
                        Math.floor(width! * ratio),
                        Math.floor(height! * ratio),
                        message.key,
                        message.bucket,
                        s3Response.ContentType!,
                        (ratio * 100).toString()
                    )
                }))
                await sqsClient.send(new DeleteMessageCommand({
                    QueueUrl: config.get<string>('sqs.queueUrl'),
                    ReceiptHandle,
                }))            
    
            } catch (e) {
                console.log(`there was an error in ${ReceiptHandle}`, e)
            }
        } else {
            console.log('nothing to process....')
        }

        await new Promise(resolve => setTimeout(resolve, 1000))
    }
}

work()
