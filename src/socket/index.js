import { io } from "socket.io-client"
const option = {
  transports: ['websocket']
}
const socket = io("http://localhost:3000/", option);
export default socket