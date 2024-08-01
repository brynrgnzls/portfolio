import { Db, MongoClient, ServerApiVersion } from "mongodb";

export class MongoDbConnector {
  private static client = new MongoClient(process.env.DB_URI as string, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  private static dbInstance: Db;

  static async getDbInstance() {
    console.log({ DbUri: process.env.DB_URI, DbName: process.env.DB_NAME });

    if (!this.dbInstance) {
      try {
        await this.client.connect();
        this.dbInstance = this.client.db(process.env.DB_NAME);
        this.dbInstance.command({ ping: 1 });
        console.log("Connected to the database");
      } catch (error) {
        console.error(error);
      }
    }
    console.log({ dbInstance: this.dbInstance });
    return this.dbInstance;
  }
}
