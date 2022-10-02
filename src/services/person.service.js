import {getConnection} from '../common/connections';

async function readPersons(response) {
    const connection= await getConnection();
    const result= await connection.query("select * from persons")
    return response.json(result);
}

export const methods = {
    readPersons
}