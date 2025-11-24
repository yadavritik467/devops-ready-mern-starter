import express, { type Request, type Response } from "express";
import cors from "cors";

const app = express();

const port = 4500;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.get("/", (req: Request, res: Response) => {
  res.send("hii from server !!");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
