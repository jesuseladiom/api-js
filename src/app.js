import express from 'express';
import morgan from 'morgan';

import personRoutes  from './routes/index.routes'

const app= express();

app.set("port", 4000);

//middleware
app.use(morgan("dev"));
app.use(express.json())

//routes
app.use("/api/persons", personRoutes);


export default app;



