import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { userId } = req.query;
  
  // Extract parts of the userId
  const [firstName, lastNameWithId] = userId.split('-');
  const lastName = lastNameWithId.slice(0, -4); // Extract the last name
  const idPrefix = lastNameWithId.slice(-4); // Extract the 4 digit id prefix
  
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const user = await db.collection('formentries').findOne({
      firstName: firstName,
      lastName: { $regex: `^${lastName}` },
      _id: { $regex: `${idPrefix}$` }
    });

    console.log("new user", user)

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Internal server error' });
  }
}
