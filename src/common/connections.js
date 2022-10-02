import mysql from 'promise-mysql';
import config from './constants';

const connection= mysql.createConnection({
    host: config.HOST,
    database: config.DB,
    user: config.USER,
    password: config.PWD
});

const getConnection= () => {
    return connection;
}

module.exports={
    getConnection
}