// socket.ts (создаем глобальный экземпляр сокета)
import { io, Socket } from 'socket.io-client';

let socket: Socket;

if(process.env.NEXT_PUBLIC_API_URL){
    socket = io(process.env.NEXT_PUBLIC_API_URL, {
        autoConnect: false,
        transports: ['websocket','polling'],
        reconnectionAttempts: 2,
        reconnectionDelay: 1000,
    })
} else {
    console.error("NEXT_PUBLIC_API_URL is not defined!");
    // Можно установить заглушку, чтобы избежать ошибок в дальнейшем
    socket = {} as Socket; 
  }

  export default socket;