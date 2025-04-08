import { DeleteMessageCommand, ReceiveMessageCommand, SendMessageCommand, SQSClient } from '@aws-sdk/client-sqs'
import axios from 'axios';
import config from 'config'
import ConvertAPI from 'convertapi';
import OpenAI from 'openai';
import { UserModel } from './models/user';
import { Dropbox } from 'dropbox';
import { connect } from './db/mongoose';

const sqsConfig = JSON.parse(JSON.stringify(config.get('sqs.connection')))

if (!config.get<boolean>('sqs.isLocalstack')) delete sqsConfig.endpoint

const sqsClient = new SQSClient(sqsConfig)
const chatGpt = new OpenAI({
    apiKey: config.get('openAI.secret')
});

async function work() {

    await connect()

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

                // get the text to translate
                const axiosResponse = await axios(payload.link)
                console.log(`translation is ${axiosResponse.data}`)
    
                const response = await chatGpt.responses.create({
                    model: 'gpt-4o',
                    input: `please translate the following to ${payload.language}: ${axiosResponse.data}`,
                });
                
                console.log(response)


                console.log(`user id is ${payload.userId}`)
                // now save the file in dropbox
                const user = await UserModel.findById(payload.userId)
                const dbx = new Dropbox({accessToken: user!.dropbox.accessToken})

                await dbx.filesUpload({
                    contents: response.output_text,
                    path: `/test.${payload.language}.txt`
                })

                await sqsClient.send(new DeleteMessageCommand({
                    QueueUrl: config.get<string>('sqs.translateQueueUrl'),
                    ReceiptHandle,
                }))
                console.log(`deleted message from translate queue`)
            }
    
    
    
            await new Promise(resolve => setTimeout(resolve, 1000))
    
        } catch (e) {
            console.log(e)
        }
    }
}

work()
