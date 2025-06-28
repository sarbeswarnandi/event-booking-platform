import styles from '../events/page.module.css';

const dramaEvents = [
  {
    title: 'Shakespeare Live',
    image: '/drama1.jpg'
  },
  {
    title: 'Local Play',
    image: '/drama2.jpg'
  },
  // Add more here
];

export default function DramaPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Drama and Theatre</h1>
      <div className={styles.grid}>
        {dramaEvents.map((event, index) => (
          <div key={index} className={styles.card}>
            <img src={event.image} alt={event.title} />
            <h2>{event.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
