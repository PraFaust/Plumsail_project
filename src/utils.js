/* eslint-disable */

function validateEmail (email) {
  let re = /\S+@\S+\.\S+/
  return re.test(email)
}

function autorizeError () {
  console.log(`autorize server error!!!`)
}

function registerSend (dataReg, callback) {
  $.ajax({
    url: 'http://localhost:50330/Home/register',
    dataType: 'text',
    method: 'GET',
    cache: false,
    success: callback,
    error: autorizeError,
    data: {'registerData': dataReg}
  })
}

function loginSend (dataLog, callback) {
  $.ajax({
    url: 'http://localhost:50330/Home/login',
    dataType: 'text',
    method: 'GET',
    cache: false,
    success: callback,
    error: autorizeError,
    data: {'loginData': dataLog}
  })
}

module.exports = {validateEmail, registerSend, loginSend}
