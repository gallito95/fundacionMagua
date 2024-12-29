import express from 'express';
import authRoutes from "./routes/auth.js";
import postsRoutes from "./routes/posts.js";
import cookieParser from 'cookie-parser';
import multer from 'multer';
import cors from 'cors';

const app = express();


// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true }));

// Multer-Konfiguration für Datei-Uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

const upload = multer({ storage });


app.post('/api/upload', upload.single('file'), function (req,res){
  const file = req.file
  res.status(200).json(file.filename)
})


app.use("/api/auth", authRoutes); // Füge die Auth-Routen hinzu
app.use("/api/posts", postsRoutes);

app.listen(8800, () => {
   console.log('running on port 8800');
 });

