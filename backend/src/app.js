import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({origin:"http://localhost:5173"}));

app.use("/api/contact", contactRoutes);

export default app;