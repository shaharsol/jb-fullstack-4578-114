import Logger from "./logger.js";
export default class ConsoleLogger extends Logger {
    log(message) {
        console.log(message);
    }
}
