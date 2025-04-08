import { DeleteMessageCommand, ReceiveMessageCommand, SendMessageCommand, SQSClient } from '@aws-sdk/client-sqs'
import config from 'config'
import ConvertAPI from 'convertapi';

const convertapi = new ConvertAPI(config.get('convertApi.secret'));

const sqsConfig = JSON.parse(JSON.stringify(config.get('sqs.connection')))

if (!config.get<boolean>('sqs.isLocalstack')) delete sqsConfig.endpoint

const sqsClient = new SQSClient(sqsConfig)


async function work() {
    while(true) {

        try {
            console.log('working...')

            const { Messages } = await sqsClient.send(new ReceiveMessageCommand({
                QueueUrl: config.get<string>('sqs.translateQueueUrl'),
                MaxNumberOfMessages: 1
            }))
            if (Messages) {
                const { Body, ReceiptHandle } = Messages[0]
    
                const payload = JSON.parse(Body!)
    





                
                await sqsClient.send(new DeleteMessageCommand({
                    QueueUrl: config.get<string>('sqs.docxToTxtQueueUrl'),
                    ReceiptHandle,
                }))
                console.log(`deleted message from docx-to-txt queue`)
            }
    
    
    
            await new Promise(resolve => setTimeout(resolve, 1000))
    
        } catch (e) {
            console.log(e)
        }
    }
}

work()
