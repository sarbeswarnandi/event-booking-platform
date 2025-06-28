import styles from '../events/page.module.css';

const comedyEvents = [
  {
    title: 'Stand-up Night',
    image: '/comedy1.jpg'
  },
  {
    title: 'Open Mic Special',
    image: '/comedy2.jpg'
  },
  // Add more here
];

export default function ComedyPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comedy Shows</h1>
      <div className={styles.grid}>
        {comedyEvents.map((event, index) => (
          <div key={index} className={styles.card}>
            <img src={event.image} alt={event.title} />
            <h2>{event.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
