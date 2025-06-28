import styles from '../events/page.module.css';

const funEvents = [
  {
    title: 'Adventure Park',
    image: '/fun1.jpg'
  },
  {
    title: 'Food Festival',
    image: '/fun2.jpg'
  },
  // Add more here
];

export default function FunPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fun Activities</h1>
      <div className={styles.grid}>
        {funEvents.map((event, index) => (
          <div key={index} className={styles.card}>
            <img src={event.image} alt={event.title} />
            <h2>{event.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
