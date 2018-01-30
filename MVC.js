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
c.getPassword = function(){}
c.downloadContacts = function(){}
c.showContacts = function(){}