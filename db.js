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

// import mongoose from "mongoose";

// const conn = () => {
//     mongoose.connect(process.env.DB_URI, {
//         dbName: 'webtoken',
//         useNewUrlParser: true,
//         useUnifiedTopology: true,

    
//     }).then(() =>{
//         console.log('connected to the DB succesully');
//     })
//     .catch((err) => {
//         console.log(`DB connection err:, ${err}`);
//     });
// };

// export default conn;