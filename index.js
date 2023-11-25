import  express  from "express";
import dotenv from "dotenv"
import Connections from "./mongoDB/Connection.js";
import router from "./Routes/routes.js"
import cors from 'cors'
import bodyParser from "body-parser";



const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use( "*", cors({ credentials: true }));

dotenv.config();
const URL = process.env.DATABASE;

Connections(URL)


app.use('/',router);





app.listen(5000,()=>{
    console.log("server is running on 5000")
})


