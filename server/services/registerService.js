/* 
  Register Service will validate email, user name and password for new account
  return a true or false response.
  false returns will keep users on the login page with errors
  true will redirect user to the to login.ejs
*/
const fileService = require('./fileService')

exports.authenticate = (credential)=>{
 
    const {username, email} = {...credential}
    const users = fileService.getFileContents('../data/users.json');
    // flush the authentication
    
    const authUser =  users.reduce((authObj, user)=>{
      
    if(user.email != email){
        authObj.validEmail = true;
    }else{

    }
 
    if(user.username != username){
        authObj.validUsername = true;
    }else{

    }
 
    if(authObj.validEmail===true && authObj.validUsername===true){
        authObj.user = user;
    }
          
    return authObj
 
    }, {validEmail:false, validUsername:false, user:null})
 
    const auth0 = authUser.user ? {user:authUser.user}: formatErrors(authUser);
    return auth0
 
}
const formatErrors = function(user){
    let emailWarning = ""
    let usernameWarning = ""
  
    if(user.validEmail === false){ emailWarning= `email is taken`}
    if(user.validUsername === false){usernameWarning= `user name is taken`}
  
    return {user:null, emailWarning, usernameWarning}
}
  