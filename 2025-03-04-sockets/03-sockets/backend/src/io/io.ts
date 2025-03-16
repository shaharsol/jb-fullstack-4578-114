import { io } from "socket.io-client";
import config from 'config'

const socket = io(config.get<string>('io.url'))

export default socket