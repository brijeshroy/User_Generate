import { getPool } from "../db/db";

export const insertUser = async (dbQuery:string,dbParams:any[])=>{
    console.log("Inserting data into Postgres");
    const pool = getPool();
    let result:any;
    try {
          result = await pool.query(dbQuery, dbParams);
         console.log('Data Inserted, Output is :-',JSON.stringify(result))
    } catch (error:unknown) {
        console.log("Error encountered while inserting data is :-",JSON.stringify(error));
        throw error
        
    }
    return result
}