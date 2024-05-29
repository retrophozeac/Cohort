import { Client } from 'pg'
 
// const client = new Client({
//   connectionString:"postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable"
// })

// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE usersx (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result)
// }

// createUsersTable();
async function insertUser() {
    const client = new Client({
        connectionString:"postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable"
      })

    try {
        await client.connect()
        const query = "INSERT INTO usersx (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
        const result = await client.query(query);
        console.log("Successfully updated")
    } catch (error) {
        console.log("error")       
    } finally{
        await client.end()
    }
    
}
insertUser();