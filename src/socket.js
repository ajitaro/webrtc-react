import { io } from 'socket.io-client'

export const socket = io('https://webrtc-node-lime.vercel.app:3000', {
  transports: ['websocket']
})