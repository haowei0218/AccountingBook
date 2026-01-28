export type UserAuthData = {
  UserLogin: {
    data: [
      {
        userid: string
        accountname: string
        password: string
      }
    ]
    log: {
      message: string
      code: string
      serviceDate: string
    }
  }
}
