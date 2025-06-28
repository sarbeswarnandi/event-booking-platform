import styles from '../events/page.module.css';

const musicEvents = [
  {
    title: 'Rock Festival',
    image: '/music1.jpg'
  },
  {
    title: 'Classical Evening',
    image: '/music2.jpg'
  },
  // Add more here
];

export default function MusicPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Music Shows</h1>
      <div className={styles.grid}>
        {musicEvents.map((event, index) => (
          <div key={index} className={styles.card}>
            <img src={event.image} alt={event.title} />
            <h2>{event.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
