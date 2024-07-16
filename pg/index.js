import postgres from 'postgres'

const connectionString = "postgres://postgres:postgres@localhost:5432/"
const sql = postgres(connectionString)
async function getUsersOver(age) {
    const users = await sql`
    SELECT table_name, table_schema
    FROM information_schema.tables 
    WHERE table_schema = 'public'`
    console.log(users, users.length)
    return users
}
getUsersOver();