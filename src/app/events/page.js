import styles from './page.module.css';
import Link from 'next/link';

const dummyEvents = [
  {
    id: 'music-fest-2025',
    title: 'Sunburn Music Fest',
    date: '2025-10-20',
    location: 'Goa Beach Arena',
    image: '/sample-event-1.jpg',
  },
  {
    id: 'tech-expo',
    title: 'Tech Expo India',
    date: '2025-11-02',
    location: 'Bangalore Convention Center',
    image: '/sample-event-2.jpg',
  },
];

export default function EventsPage() {
  return (
    <div className={styles.container}>
      <h1>Upcoming Events</h1>
      <div className={styles.grid}>
        {dummyEvents.map(event => (
          <Link key={event.id} href={`/events/${event.id}`} className={styles.card}>
            <img src="https://i.etsystatic.com/16838432/r/il/b54618/6552463239/il_fullxfull.6552463239_gi6r.jpg" alt="Events"/>
            <div className={styles.details}>
              <h2>{event.title}</h2>
              <p>{event.date} • {event.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
