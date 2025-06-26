'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>🎟️ EventBook</div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/events">Events</Link></li>
        <li><Link href="/organizer">Organizer</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
