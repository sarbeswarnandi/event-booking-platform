'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Chat from './Chat'; // ✅ Import Chat component

export default function EventPage({ params }) {
  const { id } = params;
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/book/${id}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setMessage(
      data.error
        ? `Error: ${data.error}`
        : 'Booking confirmed! Your ticket is linked to your email.'
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Event: {id.replace(/-/g, ' ')}</h1>

      {/* Booking Form */}
      <form onSubmit={handleBooking} className={styles.form}>
        <input
          type="email"
          required
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Book Ticket</button>
      </form>

      {message && <p className={styles.message}>{message}</p>}

      {/* Chat Section */}
      <section className={styles.chatSection}>
        <h2 className={styles.chatTitle}>Event Chat</h2>
        <Chat eventId={id} />
      </section>
    </div>
  );
}
