import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/notes", notesRoutes);
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Kb2K3jPS6QjYUizo

// mongodb+srv://vikikalimuthu2001:Kb2K3jPS6QjYUizo@cluster0.ra3wxln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
