import app from "./app";
import connectDB from "./config/db";
import dotenv from "dotenv";

dotenv.config();

const PORT = 6770 || process.env.PORT;

connectDB();

app.listen(PORT, ()=>{
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});