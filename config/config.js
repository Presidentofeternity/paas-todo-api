require("dotenv").config()
const { parse } = require("pg-connection-string")
console.log(process.env.DATABASE_URL)
const { host, port, database, user, password } = parse(process.env.DATABASE_URL)

module.exports = {
  username: user,
  password: password,
  database: database,
  host: host,
  port: port,
  dialect: "postgres"
}
