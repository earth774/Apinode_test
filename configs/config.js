module.exports = function (req, res, next) {

  // ส่งค่าข้อมูลออกเป็น Json พร้อม Status
  res.setHeader('content-type', 'application/json');
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
  res.set('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token');

  res.responseRequestSuccess = (data) => {
    res.status(200);
    res.json({
      status: 'success',
      data: data
    });
  }

  res.responseRequestError = (data = 'Bad request', status = 200) => {
    res.status(status);
    res.json({
      status: 'error',
      data: data
    });
  }

  next();
};