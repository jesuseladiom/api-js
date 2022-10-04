import {getConnection} from "./../common/connections"

async function readPersons(response) {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM persons")
        return result;
}

async function readPerson(body,response) {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM persons WHERE person_id = ?", body.id)
    return result;
}

async function deletePerson(body,response) {
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM persons WHERE person_id = ?", body.id)
    return result;
}

async function addPerson(body, response) {
        const {first_name, last_name, edad, genero}= body;
        const person= {first_name, last_name, edad, genero};
        const connection = await getConnection();
        const result= await connection.query("insert into persons SET ?", person);
        return result;
}

async function updatePerson(id, body, response) {
    const {first_name, last_name, edad, genero}= body;
    const person= {first_name, last_name, edad, genero};
    const connection = await getConnection();
    const result= await connection.query("update persons SET ? where person_id= ?", [person, id]);
    return result;
}




export const methods = {
    addPerson,
    readPersons,
    readPerson,
    updatePerson,
    deletePerson
}