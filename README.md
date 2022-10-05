# Api-js
Proyecto de api de registro personas en una base de datos mysql que usa los verbos get, put, delete, post, patch.

El objetivo es insertar, consultar, actualizar y eliminar registros de personas en una base de datos mysql

# Ejecutar la aplicación
1. Clonar el repositorio en tu carpeta de trabajo: git clone git@github.com:jesuseladiom/api-js.git
1. Entra a la carpeta del proyecto
1. Instalar los modulos y/o paquetes
1. Crear la base de datos y la tabla
1. Modificar las variables de acceso a la base de datos (constants.js)
1. Para correr en modo desarrollo, ejecuta: npm run dev
1. Para correr en produccion: npm start

# Instalación de módulos o paquetes 
1. npm i dotenv express promise-mysql heroku
1. npm i morgan nodemon -D (para ambiente de desarrollo solamente)
1. npm i -D @babel/cli @babel/core @babel/node @babel/preset-env (para ambiente de desarrollo solamente)
1. npm install --save-dev jest supertest @types/jest babel-jest (Desarrollo)

Si deseas hacerlo de la forma facil solo teclea: npm install 

# Crear tabla persons
1. Crear la base de datos en tu servidor o en tu computadora usando xampp o wampserver
1. Crear la tabla persons en tu base de datos
1.      CREATE TABLE persons (
        person_id int primary key AUTO_INCREMENT,
        first_name varchar(255),
        last_name varchar(255),
        edad int,
        genero varchar(1)   );

# Configurar variables de bases de datos
1. Modificar el archivo src/common/constants.js para introducir las credenciales a la bd
1. Editar las variables host,db,user,pwd




