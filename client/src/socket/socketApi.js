import { io } from 'socket.io-client';

let socket;
export const connectSocket = () => {
  console.log('Connectting');
  socket = io('https://intense-crag-03696.herokuapp.com/', {
    transports: ['websocket'],
  });

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
