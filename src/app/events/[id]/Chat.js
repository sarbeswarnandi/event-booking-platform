'use client';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

let socket;

export default function Chat({ eventId }) {
  const [msg, setMsg] = useState('');
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    socket = io(undefined, { path: '/api/socket' });
    socket.emit('join', eventId);
    socket.on('message', (msg) => setLogs((prev) => [...prev, msg]));
    return () => socket.disconnect();
  }, [eventId]);
  

  function send() {
    socket.emit('message', { room: eventId, msg, user: 'User' });
    setMsg('');
  }

  return (
    <div>
      <div className="chatlogs">{logs.map((m, i) => <p key={i}><strong>{m.user}:</strong> {m.msg}</p>)}</div>
      <input value={msg} onChange={e => setMsg(e.target.value)} placeholder="Enter message" />
      <button onClick={send}>Send</button>
    </div>
  );
}
