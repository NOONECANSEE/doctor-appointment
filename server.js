import express from "express";
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
dotenv.config();
connectDB();
// REST OBJECT
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/doctor", doctorRoutes);
app.get("/", function (req, res) {
  res.status(200).send({
    message: "Server is running",
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server is running".bgCyan.white);
});
