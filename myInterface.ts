interface User {
  readonly dbId: number
  email: string,
  userId: number,
  googleId?: string,
  startTrail: () => string
  getCoupon(couponname: string, value: number): number
}


const pras: User = {dbId: 22,email: "praseee@g.com", userId: 123, 
googleId: "idk", 
startTrail: () => {
  return "trail started"
},
getCoupon: (name: "prasss", off: 10) => {
  return 10
}
}

pras.email = "h@hh.com"
// pras.dbId = 33