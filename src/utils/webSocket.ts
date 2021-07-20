import io from 'socket.io-client'
const URL = process.env.REACT_APP_BACKEND || 'http://localhost:9000'
const socket = io(URL, {
  autoConnect: false,
  transports: ['websocket'],
  withCredentials: true,
})

socket.onAny((event, ...args) => {
  console.log(event, args)
})

export default socket