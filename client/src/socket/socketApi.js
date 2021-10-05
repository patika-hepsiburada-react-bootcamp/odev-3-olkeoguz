import { io } from 'socket.io-client';

let socket;
export const connectSocket = () => {
  console.log('Connectting');
  socket = io('http://localhost:8000/', { transports: ['websocket'] });
  // socket = io(process.env.REACT_APP_BACKEND_ENDPOINT, { transports: ['websocket'] });

  socket.on('connect', () => {
    console.log('connected');
  });

  socket.on('connect_error', () => {
    console.error('Connection failed.');
  });
};

export const sendNewResults = (topic, data) => {
  if (!socket) {
    return false;
  }

  socket.emit(topic, data);
};

export const subscribeToResults = (topic, data) => {
  if (!socket) {
    return false;
  }
  socket.on(topic, data);
};
