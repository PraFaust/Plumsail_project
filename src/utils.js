
function checkRegisrtationData (data) {
  console.log(`registration success!`)
  console.dir(data)

  console.log(`email is ${validateEmail(data.email)}`)
  return true
}

function validateEmail (email) {
  var re = /\S+@\S+\.\S+/
  return re.test(email)
}

module.exports = {checkRegisrtationData, validateEmail}
