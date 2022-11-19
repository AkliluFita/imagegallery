import mysql from "mysql";

// create DB connection
export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aklilu@mysql",
  database: "imageblog",
});

// check the connection

db.connect((err)=> {
  if(!err)
  console.log('Connection Established Successfully');
  else
  console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
  });


