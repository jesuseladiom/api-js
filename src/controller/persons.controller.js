//import { methods as productServices } from "../services/product.service";
// *****************temporal va en el services
import {getConnection} from './../common/connections';



// -------------------------------------------------

const getPersons= async (req,res) => {
    try {
        const connection= await getConnection();
        const result= await connection.query("select * from persons");
        if (result.length) res.json(result);
        else res.json({"message":"No data"});
    } catch (error) {
        res.status(500);
        res.json({"MENSAJE":error.message});
    }
};

const getPerson=  async (req,res) => {
    try {
        const {id}= req.params;
        const connection= await getConnection();
        const result= await connection.query("select * from persons where person_id = ?", id);
        if (result.length) res.json(result);
        else res.json({"message":"Person not found"});
    } catch (error) {
        res.status(400);
        res.json({"message":error.message});
    }
};


const addPerson= async (req,res) => {
    try {
        //console.log(req.body);
        const {first_name, last_name, edad, genero}= req.body;
        if (first_name===undefined || last_name===undefined|| edad===undefined|| genero===undefined) {
            res.status(400).json({"message":"Bad Request. Please fill all fields"});
        }
        const person= {first_name, last_name, edad, genero};
        const connection= await getConnection();
        const result= await connection.query("insert into persons SET ?", person);
        //res.json(result);
        res.json({message:"Person added"});
    } catch (error) {
        res.status(500);
        res.send({"message":error.message,"text":"Person not added"});
        //res.json({"MENSAJE":error.message});
    }
};

const deletePerson= async (req,res) => {
    try {
        const {id}= req.params;
        const connection= await getConnection();
        const result= await connection.query("delete from persons where person_id = ?", id);
        if (result.affectedRows) res.json({"message":"Person deleted"});
        else res.json({"message":"Person not found"});
    } catch (error) {
        res.status(400);
        res.json({"message":error.message});
    }
};

const updatePerson= async (req,res) => {
    const {id}= req.params;
    const {first_name, last_name, edad, genero}= req.body;
    if (id===undefined||first_name===undefined || last_name===undefined|| edad===undefined|| genero===undefined) {
        res.status(400).json({"message":"Bad Request. Please fill all fields"});
    }
    const person= {first_name, last_name, edad, genero};
    const connection= await getConnection();
    const result= await connection.query("update persons SET ? where person_id= ?", [person, id]);
    if (result.affectedRows) res.json({"message":"Person updated"});
    else res.json({"message":"Person not found"});
};

export const methods = {
    getPersons,
    getPerson,
    addPerson,
    deletePerson,
    updatePerson
};