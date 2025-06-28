import styles from '../events/page.module.css';

const promotionsEvents = [
  {
    title: 'Diwali Fest 2025',
    image: '/promo1.jpg'
  },
  {
    title: 'New Year Bash',
    image: '/promo2.jpg'
  },
  // Add more here
];

export default function PromotionsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Promotions and Featured Events</h1>
      <div className={styles.grid}>
        {promotionsEvents.map((event, index) => (
          <div key={index} className={styles.card}>
            <img src={event.image} alt={event.title} />
            <h2>{event.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
