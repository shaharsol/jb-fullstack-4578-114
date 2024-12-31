import Logger from "./logger.js";

export default class ConsoleLogger extends Logger {
    log(message: string): void {
        console.log(message)
    }

    error(message: string) {
        console.error(message)
    }
    
}