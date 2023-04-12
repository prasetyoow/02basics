const User = {
  name: "pras",
  email: "pras@loco.dev",
  isActive: true
}

// function createUser({name: string, isPaid: boolean}) {}


let newUser = {name: "prase", isPaid: true, email: "prase@laalc.com"}

// createUser(newUser)


function createCourse():{name: string, price: number}{
  return {name: "vuejs", price: 399}
}

// type User = {
//   name: string,
//   email: string,
//   isActive: boolean
// }

// type Mystring = string

// function createUser(user: User): User {
//   return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})


type User = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean,
  credcardDetails?: number
}

let myUser: User = {
  _id: "1234",
  name: "pras",
  email: "pras@hee.com",
  isActive: false,
}

type cardNumber = {
  cardNumber: string
}

type cardDate = {
  cardDate: string
}

type cardDetails = cardNumber & cardDate & {
  cvv: number
}



myUser.email = "pras@gmail.com"
// myUser._id = "asa"

export {}