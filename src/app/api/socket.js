import { Server } from 'socket.io';

const io = new Server({
  path: '/api/socket',
  cors: { origin: '*' },
});

io.on('connection', (socket) => {
  console.log('User joined socket');

  socket.on('join', (room) => socket.join(room));
  socket.on('message', ({ room, msg, user }) => {
    io.to(room).emit('message', { user, msg, time: new Date() });
  });
});

export default function handler(req, res) {
  res.end(); // just ensure handshake
}
export const config = { api: { bodyParser: false } };
