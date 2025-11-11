import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"
dotenv.config()
let port = process.env.PORT ||3000;
let app = express();

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true

}))


app.use("/api/auth",authRouter)
app.listen(port,(req,res)=>{
    connectDb()
    console.log("server starts");
    
})