import styles from '../events/page.module.css';

const expoEvents = [
  {
    title: 'Tech Expo',
    image: '/expo1.jpg'
  },
  {
    title: 'Art and Culture Expo',
    image: '/expo2.jpg'
  },
  // Add more here
];

export default function ExpoPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Expo Events</h1>
      <div className={styles.grid}>
        {expoEvents.map((event, index) => (
          <div key={index} className={styles.card}>
            <img src={event.image} alt={event.title} />
            <h2>{event.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
