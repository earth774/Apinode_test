var mysql = require('mysql');
const util = require('util');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});

const query = util.promisify(con.query).bind(con);


// Get Data Contact
let getAll = async (req, res) => {
  var sql = `SELECT * FROM contact`;
  let result = await query(sql);
  res.json(result);
}

// Add data Contact 
let addData = async (req, res) => {
  var sql = `INSERT INTO contact (name, address,telephone) VALUES ('${req.body.name}','${req.body.address}','${req.body.telephone}')`;
  let result = await query(sql);
  res.json(result);
}

// Update data Contact
let updateData = async (req, res) => {
  var sql = `UPDATE contact SET name = '${req.body.name}',address = '${req.body.address}', telephone = '${req.body.telephone}' WHERE id = ${req.params.id}`;
  let result = await query(sql);
  res.json(result);
}

// Delete data Contact
let deleteData = async (req, res) => {
  var sql = `DELETE FROM contact WHERE id = ${req.params.id}`;
  let result = await query(sql);
  res.json(result);
}

module.exports = {
  addData,
  getAll,
  updateData,
  deleteData
}