import express, { response } from 'express';
//import morgan from 'morgan';
//import dotenv from 'dotenv'

import personRoutes  from './routes/index.routes'

const app= express();

const PORT = process.env.PORT || 4000;

app.set("port", PORT);

//middleware
//app.use(morgan("dev"));
app.use(express.json())

//routes
app.use("/api/persons", personRoutes);
app.use("/", (req, res)=>{
    res.status(404).json("Read the documentation of the Api");
});


export default app;



