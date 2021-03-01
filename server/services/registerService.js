/* 
  Register Service will validate email, user name and password for new account
  return a true or false response.
  false returns will keep users on the login page with errors
  true will redirect user to the to login.ejs
*/
const fileService = require('./fileService')