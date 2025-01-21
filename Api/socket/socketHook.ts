import { useEffect, useState } from 'react';
import socket from './socket';
import { ClientKardOnlineSession } from '@/types/types';

type StatusConnect = 'errorConnect' | 'connect' | 'succsessConnect' | 'disconnect' | 'errorSearchEnemy' | 'searchEnemy' | 'gameActive';

const useSocketConnect = () => { 
  const [connected, setConnected] = useState<StatusConnect>('connect');
  const [data, setData] = useState<ClientKardOnlineSession | undefined>();

  useEffect(() => {
    const handleConnect = () => {
        console.log('Подключение установлено');
        setConnected('succsessConnect');
    };
  
    const handleDisconnect = () => {
        console.log('Связь разорвана');
        setConnected('disconnect');
    };
  
    const handleConnectError = (error: Error) => {
        console.error('Ошибка подключения:', error);
        setConnected('errorConnect');
    };
  
    socket.on('connect', handleConnect);
    socket.on('disconnect', handleDisconnect);
    socket.on('connect_error', handleConnectError);
    socket.on('move', (msg: ClientKardOnlineSession) => {
        setConnected('gameActive');
        setData(msg);
    });
  
    socket.connect();
  
    return () => {
      socket.off('connect', handleConnect);
      socket.off('disconnect', handleDisconnect);
      socket.off('connect_error', handleConnectError);
      socket.off('move');
      socket.disconnect();
      console.log('Подключение разорвано');
    };
  }, []);
  

  return {
    connected,
    data
  }
};

export default useSocketConnect;


