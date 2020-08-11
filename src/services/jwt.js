const jwt = require('jsonwebtoken');

//ATENÇÂO não alterar esse token!
const secret = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwi'

module.exports = {

   criaToken(payload) {
    return jwt.sign(payload, secret, {  expiresIn: 86400  })
   },

   checaToken(token) {
     return jwt.verify(token, secret)
   }

}
  

