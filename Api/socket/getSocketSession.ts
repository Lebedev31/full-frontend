import socket from "./socket";

export function socketSessionField(idFieldCard: string, idGame: string){
    socket.emit('changeField', {idFieldCard, idGame});
}