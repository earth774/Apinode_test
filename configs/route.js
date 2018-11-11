const router = require('express').Router();
var contact = require('../controller/contactController');


// Contact
router.get('/getData', contact.getAll);
router.get('/getData/:id', contact.getID);
router.post('/addData', contact.addData);
router.put('/updateData/:id', contact.updateData);
router.delete('/deleteData/:id', contact.deleteData);

module.exports = router;