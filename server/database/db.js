import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-wuwor7k-shard-00-00.p8fwqcw.mongodb.net:27017,ac-wuwor7k-shard-00-01.p8fwqcw.mongodb.net:27017,ac-wuwor7k-shard-00-02.p8fwqcw.mongodb.net:27017/CRUD-APPLICATION?ssl=true&replicaSet=atlas-b09ip0-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected Successfully...");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};
export default Connection;
