import { methods as personServices } from "../services/person.service";
import {getConnection} from "./../common/connections"

const getPersons= async (req,res) => {
    try {
            const query = await personServices.readPersons(res);
            if (query.length) res.json(query);
            else res.json({"message":"No data"});
        } catch (error) {
                 res.status(500);
                 res.send({"message":error.message});
        }
};

const getPerson = async (req, res)=>{
    try {
        const query = await personServices.readPerson(req.params,res);
        if (query.length) res.json(query);
        else res.json({"message":"Person not found"});    
    } catch (error) {
        res.status(400);
        res.send({"message":error.message});
    }
};

const addPerson = async (req, res)=>{
    let flagError=0;
    try {
        const {first_name, last_name, edad, genero}= req.body;
       if (first_name===undefined || last_name===undefined|| edad===undefined|| genero===undefined) {
            flagError= 1;
            res.status(400).json({"message":"Bad Request. Please fill all fields"});
        }
        const query = await personServices.addPerson(req.body,res);
        if (query.affectedRows) res.status(201).json({"message":"Person added"});
        else res.json({"message":"Person not added"});    
    } catch (error) {
        if (flagError) return;
        else res.status(400).json({"message":error.message});
    }
};

const deletePerson = async (req, res)=>{
    try {
        const query = await personServices.deletePerson(req.params,res);
        if (query.affectedRows) res.json({"message":"Person deleted"});
        else res.json({"message":"Person not found"});    
    } catch (error) {
        res.status(400);
        res.send({"message":error.message});
    }
};

const updatePerson= async (req,res) => {
    let flagError=0;
    try {

        const {id}= req.params;
        const {first_name, last_name, edad, genero}= req.body;
        if (id===undefined||first_name===undefined || last_name===undefined|| edad===undefined|| genero===undefined) {
            flagError= 1;
            res.status(400).json({"message":"Bad Request. Please fill all fields"});
        }
        const query = await personServices.updatePerson(id,req.body,res);
        if (query.affectedRows) res.status(200).json({"message":"Person updated"});
        else res.json({"message":"Person not updated"});    
    } catch (error) {
        if (flagError) return;
        else res.status(400).json({"message":error.message});
    }
};

export const methods = {
    getPersons,
    getPerson,
    addPerson,
    deletePerson,
    updatePerson
};