import Logger from "./logger.js";

export default class AlertLogger extends Logger {
    log(message: string): void {
        alert(message)
    }
    
}