import { ReceiveMessageCommand, SQSClient } from '@aws-sdk/client-sqs'
import config from 'config'

const sqsConfig = JSON.parse(JSON.stringify(config.get('sqs.connection')))

if (!config.get<boolean>('sqs.isLocalstack')) delete sqsConfig.endpoint

const sqsClient = new SQSClient(sqsConfig)

async function work() {
    // while(true) {
        const receivedMessage = await sqsClient.send(new ReceiveMessageCommand({
            QueueUrl: config.get<string>('sqs.queueUrl'),
            MaxNumberOfMessages: 1
        }))
        console.log(receivedMessage)
    // }
}

work()
