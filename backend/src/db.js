import { MongoClient, ObjectId } from 'mongodb';
import { config } from './config.js';
let client, db;
export async function connectDb(){ client=new MongoClient(config.MONGODB_URI); await client.connect(); db=client.db(config.MONGODB_DB); await db.collection('threads').createIndex({updatedAt:-1}); return db; }
export const collections=()=>({threads:db.collection('threads')});
export { ObjectId };
