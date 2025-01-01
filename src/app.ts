import express from "express"
import compression from "compression";
import bodyParser from "body-parser";
import flash from "express-flash"
import lusca from "lusca";
import { errorHandler } from "./middlewares/errorHandler";



const app = express();

/*
Express Configuration
*/
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(lusca.xframe("SAMEORIGIN"))
app.use(lusca.xssProtection(true))

app.use(errorHandler)

/*
Route health check
*/
app.get("/health_check", (req, res) => {
    res.status(200).json({ status: "OK", message: "Your APi Health is good" })
})






export default app