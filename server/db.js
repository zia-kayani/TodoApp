const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "zia123",
  port: 5050,
  database: "authtodolist"
});

module.exports = pool;
