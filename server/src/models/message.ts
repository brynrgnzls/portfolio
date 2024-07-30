import { IPostMessageBody } from "type-defs";
import { Db } from "mongodb";

export async function insertMessage(db: Db, message: IPostMessageBody) {
  return db.collection("messages").insertOne(message);
}
