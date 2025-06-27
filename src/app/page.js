import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.home}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <h1>🎟️ Welcome to EventBook</h1>
        <p>Discover and book amazing events near you!</p>
      </section>

      {/* PROMOTIONS */}
      <CategorySection
        title="🔥 Promotions & Featured Events"
        events={[
          { title: 'Mega Concert 2025', image: '/promo1.jpg' },
          { title: 'Sports Pass Discount', image: '/promo2.jpg' },
        ]}
      />

      {/* EXPO */}
      <CategorySection
        title="🏛️ Expo Events"
        events={[
          { title: 'Tech Expo India', image: '/expo1.jpg' },
          { title: 'Art & Culture Expo', image: '/expo2.jpg' },
        ]}
      />

      {/* COMEDY */}
      <CategorySection
        title="😂 Comedy Shows"
        events={[
          { title: 'Stand-up Night', image: '/comedy1.jpg' },
          { title: 'Open Mic Special', image: '/comedy2.jpg' },
        ]}
      />

      {/* MUSIC */}
      <CategorySection
        title="🎵 Music Shows"
        events={[
          { title: 'Rock Festival', image: '/music1.jpg' },
          { title: 'Classical Evening', image: '/music2.jpg' },
        ]}
      />

      {/* DRAMA */}
      <CategorySection
        title="🎭 Drama & Theatre"
        events={[
          { title: 'Shakespeare Live', image: '/drama1.jpg' },
          { title: 'Local Play', image: '/drama2.jpg' },
        ]}
      />

      {/* SPORTS */}
      <CategorySection
        title="🏆 Sports Events"
        events={[
          { title: 'Football League', image: '/sports1.jpg' },
          { title: 'Marathon 2025', image: '/sports2.jpg' },
        ]}
      />

      {/* FUN */}
      <CategorySection
        title="🎡 Fun Activities"
        events={[
          { title: 'Adventure Park', image: '/fun1.jpg' },
          { title: 'Food Festival', image: '/fun2.jpg' },
        ]}
      />
    </div>
  );
}

// Reusable Component
function CategorySection({ title, events }) {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.eventGrid}>
        {events.map((event, index) => (
          <div key={index} className={styles.card}>
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
