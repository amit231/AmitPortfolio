import postgres from 'postgres'

const connectionString = "postgres://postgres:postgres@localhost:5432/mainnetdevsds12"
const sql = postgres(connectionString)
async function getUsersOver(age) {
    const users = await sql`
      select * JackpotData
      from users
    `
    return users
}
getUsersOver();