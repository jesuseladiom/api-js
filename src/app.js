import express, { response } from 'express';
const cors= require('cors')
//import morgan from 'morgan';
//import dotenv from 'dotenv'

import personRoutes  from './routes/index.routes'

const app= express();
const PORT = process.env.port || process.env.PORT || 4000;
app.set("port", PORT);

//cors
const whitelist = ["http://localhost:4000" ]
const corsOptions = {
  origin: function (origin, callback) {
    console.log(origin)
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(null, true)   //para que pase mientres este en dev
      //callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

// Configurar cabeceras y cors
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });








//middleware
//app.use(morgan("dev"));
app.use(express.json())

//routes
app.use("/api/persons", personRoutes);
app.use("/", (req, res)=>{
    res.status(404).json("Read the documentation of the Api");
});


export default app;



