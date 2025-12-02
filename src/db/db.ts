import {Pool} from "pg";

let pool : Pool | null = null


export const getPool = ()=>{
    if (!pool){
        pool = new Pool({
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          port: Number(process.env.DB_PORT),
          max: 5,                   // Recommended for AWS Lambda
          idleTimeoutMillis: 30000, // Close idle connection
        })
        console.log("Postgres Pool Created")
    }
    else
        console.log("Postgres Pool Exists")

    return pool;
}