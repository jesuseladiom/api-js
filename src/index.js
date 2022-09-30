const express = require('express');
const morgan= require('morgan');

const app = express();
const port = 3000;

// Agregar middleware para uso de req.body
app.use(express.json());
app.use(morgan("dev")); //informa rutas accesadas de la api


app.listen(port, (error) => {
    console.log(`Servidor express en puerto ${port}`);
});




