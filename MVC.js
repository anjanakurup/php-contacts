const m = {} //MODEL (holds state variables and constants)
const v = {} //VIEW (holds viewable input-output components)
const c = {} //CONTROLLER (holds all the function properties = methods)
//=============| STATE VARIABLES |================//
m.contacts = [
  ["Lastname","Firstname","Email","Phone"],
  ["Lastname 2","Firstname 2","Email 2","Phone 2"]
]
m.passwordIsValid = false

//=================| INITIALIZE |===================//
c.initialize = function(){
  
}
//==============| END OF INITIALIZE |=============//
c.checkPassword = function(guessedPassword){
  //The actual password is found in the checkPassword.php file
  //make a postman
  const postman = new XMLHttpRequest()
  postman.open('POST', 'checkPassword.php')
  postman.send(guessedPassword)
  //wait for a response with a load event from server
  postman.addEventListener('load', function(){
    if(postman.status === 200){
      const access = postman.responseText
      m.passwordIsValid = (access === 'ok') ? true : false
    }
    else{
      m.passwordIsValid = false
      console.log('Trouble at the server')
    }
      
  })
  postman.addEventListener('error', function(){
    
  })
}  

c.downloadContacts = function(){}

c.addContact = function(){}

c.saveContact = function(){}

c.deleteContact = function(){}

c.addAndSave = function(){
  c.addContact()
  c.saveContact()
}

c.deleteAndSave = function(){
  c.deleteContact()
  c.saveCOntact()
}

c.showContacts = function(){}