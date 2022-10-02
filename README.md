# api-js
proyecto de api que usa get,put,delete,post,patch

# modulos o paquetes a instalar
1. npm i dotenv express promise-mysql
1. npm i morgan nodemon -D (para ambiente de desarrollo solamente)

# configurar variables de bases de datos
1. crear archivo .env2
1. editar las variables host,bd,user,pwd

# crear tabla mysql
CREATE TABLE persons (
    person_id int primary key AUTO_INCREMENT,
    first_name varchar(255),
    last_name varchar(255),
    edad int,
    genero varchar(1)
);

