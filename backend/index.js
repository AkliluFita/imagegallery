import express from "express";
import { db } from "./db.js";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js";
import usersRoute from "./routes/users.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import multer from "multer";

const app = express();

// Loading Environment Variables
dotenv.config();

// port
const PORT = process.env.PORT || 8000;

// to fetch json data
app.use(express.json());
// for core policy
app.use(
  cors({
    credentials: true,
    origin: `http://localhost:3000`,
  })
);
// used to set cookie
app.use(cookieParser());
app.use(bodyParser.json());

// for file image uploading
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/user", usersRoute);

app.listen(PORT, () => {
  console.log("connected");
});
