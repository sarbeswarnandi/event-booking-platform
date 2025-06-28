import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>🎟️ Welcome to EventBook</h1>
        <p>Discover and book amazing events near you!</p>
      </section>

      <section className={styles.categories}>
        <h2>Browse Categories</h2>
        <div className={styles.links}>
          
          <Link href="/promotions">🔥 Promotions</Link>
          <Link href="/expo">🏛️ Expo</Link>
          <Link href="/comedy">😂 Comedy</Link>
          <Link href="/music">🎵 Music</Link>
          <Link href="/drama">🎭 Drama</Link>
          <Link href="/sports">🏆 Sports</Link>
          <Link href="/fun">🎡 Fun</Link>
        </div>
      </section>
    </div>
  );
}
