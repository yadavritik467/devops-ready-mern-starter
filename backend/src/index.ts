import express, { type Request, type Response } from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();






const port = 4500;





const dbConnection = async () => {
  try {



    await mongoose.connect("mongodb://mongo:27017/dev-ops-db");


        console.log("db connected");
  } catch (error:any) {
    console.log("db connection failed", error.message);
  }
};
app.use(
  cors({
       origin: "http://localhost:5173",
  })
);

dbConnection()

app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.get("/", (req: Request, res: Response) => {
     res.send("hii from server and its working good !!");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
