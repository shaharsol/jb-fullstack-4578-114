export default class AppError extends Error {
    constructor(public status: number, message: string) {
        super(message)
    }
}