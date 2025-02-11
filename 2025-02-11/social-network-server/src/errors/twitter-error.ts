export default class TwitterError extends Error {
    constructor(public status: number, message: string) {
        super(message)
    }
}