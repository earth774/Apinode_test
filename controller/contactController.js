var mysql = require('mysql');
const util = require('util');
var con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
  charset: 'utf8'
});

const query = util.promisify(con.query).bind(con);

let contact = {};

// Get Data Contact
contact.getAll = async (req, res) => {
  var sql = `SELECT * FROM contact`;
  let result = await query(sql);
  if (result)
    res.responseRequestSuccess(result);
  else
    res.responseRequestError("ไม่สามารถแสดงข้อมูลได้");

}

contact.getID = async (req, res) => {
  let result = selectID(req.params.id)
  if (result)
    res.responseRequestSuccess(result);
  else
    res.responseRequestError("ไม่สามารถแสดงข้อมูลได้");
}

selectID = async (id) => {
  var sql = `SELECT * FROM contact where id= ${id}`;
  return await query(sql);
}

// Add data Contact 
contact.addData = async (req, res) => {
  var sql = "INSERT INTO contact (name, address,telephone) VALUES (?,?,?)";
  let result = await query(sql, [req.body.name, req.body.address, req.body.telephone]);
  if (result)
    res.responseRequestSuccess(await selectID(result.insertId));
  else
    res.responseRequestError("ไม่สามารถแสดงข้อมูลได้");
}

// Update data Contact
contact.updateData = async (req, res) => {
  var sql = `UPDATE contact SET name = ?,address = ?, telephone = ? WHERE id = ?`;
  let result = await query(sql, [req.body.name, req.body.address, req.body.telephone, req.params.id]);
  if (result)
    res.responseRequestSuccess(await selectID(req.params.id));
  else
    res.responseRequestError("ไม่สามารถแสดงข้อมูลได้");
}

// Delete data Contact
contact.deleteData = async (req, res) => {
  var sql = `DELETE FROM contact WHERE id = ${req.params.id}`;
  let result = await query(sql);
  if (result)
    res.responseRequestSuccess("Delete Success");
  else
    res.responseRequestError("ไม่สามารถแสดงข้อมูลได้");
}

module.exports = contact;