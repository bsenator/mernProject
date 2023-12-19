import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      dbName: 'webtoken',
    });
    console.log('Connected to the database successfully');
  } catch (err) {
    console.error(`DB connection error: ${err}`);
  }
};

export default connectToDB;

