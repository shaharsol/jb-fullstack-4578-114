import { CreateBucketCommand, S3Client } from "@aws-sdk/client-s3";
import config from 'config'

const s3Client = new S3Client({
    region: 'us-east-1',
    forcePathStyle: true, // required only for localstack
    credentials: {
        accessKeyId: 'test',
        secretAccessKey: 'test'
    },
    endpoint: 'http://127.0.0.1:4566'
})

export async function createAppBucketIfNotExist() {
    try {
        await s3Client.send(
            new CreateBucketCommand({
                Bucket: config.get<string>('s3.bucket')
            })
        )
    } catch (e) {
        // ignore
        console.log('Bucket probably already exist')
    }
}

export default s3Client