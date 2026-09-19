import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import chatRoutes from "./routes/chat.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', chatRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the ChatGPT API");
});




const connectDB = async () =>{
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}



const Port = process.env.PORT;

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
  connectDB();
});
