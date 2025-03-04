import { CreateBucketCommand, S3Client } from "@aws-sdk/client-s3";
import config from 'config'

// read the config of s3, and clone it deeply
const s3Config = JSON.parse(JSON.stringify(config.get('s3.connection')))

// if we're NOT running localstack, i.e. we want to run against AWS PRODUCTION servers
// then we MUST delete the `endpoint` property from the config object
if (!config.get<boolean>('s3.isLocalstack')) delete s3Config.endpoint

// init the client
const s3Client = new S3Client(s3Config)

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