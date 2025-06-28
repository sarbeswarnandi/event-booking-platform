import { MongoClient, ObjectId } from 'mongodb';
const uri = process.env.MONGODB_URI;
let client;

export async function POST(req, { params }) {
  const { id } = params; // event id
  const { email } = await req.json();

  if (!email) return new Response(JSON.stringify({ error: 'Email is required' }), { status: 400 });

  // Connect to MongoDB
  client = client || new MongoClient(uri);
  if (!client.isConnected()) await client.connect();
  const db = client.db('eventdb');

  // Prevent double-booking
  const exists = await db.collection('bookings').findOne({ eventId: id, email });
  if (exists) return new Response(JSON.stringify({ error: 'You have already booked this event with this email.' }), { status: 400 });

  await db.collection('bookings').insertOne({
    eventId: id,
    email,
    bookedAt: new Date(),
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
