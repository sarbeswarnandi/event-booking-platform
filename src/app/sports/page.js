import styles from '../events/page.module.css';

const sportsEvents = [
  {
    title: 'Football League',
    image: '/sports1.jpg'
  },
  {
    title: 'Marathon 2025',
    image: '/sports2.jpg'
  },
  // Add more here
];

export default function SportsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sports Events</h1>
      <div className={styles.grid}>
        {sportsEvents.map((event, index) => (
          <div key={index} className={styles.card}>
            <img src={event.image} alt={event.title} />
            <h2>{event.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
