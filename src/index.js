const express = require('express');
const morgan= require('morgan');
const languageRoutes = require('./routes/languages-routes');

const app = express();
const port = 3000;

// Agregar middleware para uso de req.body
app.use(express.json());
app.use(morgan("dev")); //informa rutas accesadas de la api

//routes
app.use(languageRoutes);

app.listen(port, (error) => {
    console.log(`Servidor express en puerto ${port}`);
});




