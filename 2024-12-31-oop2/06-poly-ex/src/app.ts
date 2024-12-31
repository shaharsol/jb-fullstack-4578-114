import AlertLogger from "./alert-logger.js";
import ConsoleLogger from "./console-logger.js";
import Logger from "./logger";

function getLogger(name: string): Logger {
    switch (name) {
        case 'console':
            return new ConsoleLogger()
            break;
        case 'alert':
            return new AlertLogger()
            break;
    }
}

const logger = getLogger('alert')
const logger2 = getLogger('console')
logger.log('hello polymorphism')
logger2.log('hello polymorphism')