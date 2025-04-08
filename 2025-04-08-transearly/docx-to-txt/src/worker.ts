import { DeleteMessageCommand, ReceiveMessageCommand, SQSClient } from '@aws-sdk/client-sqs'
import config from 'config'
import sharp from 'sharp'

const sqsConfig = JSON.parse(JSON.stringify(config.get('sqs.connection')))

if (!config.get<boolean>('sqs.isLocalstack')) delete sqsConfig.endpoint

const sqsClient = new SQSClient(sqsConfig)


async function work() {
    while(true) {
        const { Messages } = await sqsClient.send(new ReceiveMessageCommand({
            QueueUrl: config.get<string>('sqs.queueUrl'),
            MaxNumberOfMessages: 1
        }))
        console.log(Messages)

        await new Promise(resolve => setTimeout(resolve, 1000))

    }
}

work()
