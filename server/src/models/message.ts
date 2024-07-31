import { Db } from "mongodb";

export async function insertMessage(db: Db, message: IPostMessageBody) {
  return db.collection("messages").insertOne(message);
}

interface IPostMessageBody {
  cookieId: string;
  message: string;
  createdAt: string;
}
