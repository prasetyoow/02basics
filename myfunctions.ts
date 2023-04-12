function addTwo(num: number) {
  return num + 2
}

function getUpper(val: string) {
  return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5)
getUpper("4")

signUpUser("prase", "asddsa@gmail.com", true)
loginUser("h"," h@history.com")

function getValue(myVal: number) {
  if (myVal > 5) {
    return true
  }
  return "200 OK"
}

const getHello = (s: string):string => {
  return ""
}

//const heros = ["thor", "spiderman", "ironman"]
const heros = ["thor", "spiderman", "ironman"]

heros.map((hero): string => {
  return `hero is ${hero}`
})


function consoleError(errmsg: string): never{
  throw new Error(errmsg);
}



export {}