const Pool = require('pg').Pool;

const pool = new Pool({
    user : "postgres",
    password : "Family143",
    host : "localhost",
    port : 5432,
    database : " final-project-music-albums"
});

module.exports = pool;