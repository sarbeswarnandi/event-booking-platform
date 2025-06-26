import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.home}>
      <h1>Welcome to EventBook 🎉</h1>
      <p>Find and book exciting events near you.</p>
      <Link href="/events" className={styles.ctaButton}>Browse Events</Link>
    </div>
  );
}
