import { gql } from '@apollo/client'

export const UserAuth = gql`
  mutation UserAuth($accountname: String!, $password: String!) {
    UserLogin(accountname: $accountname, password: $password) {
      data {
        userid
        accountname
        password
        alicename
      }
      log {
        message
        code
        serviceDate
      }
    }
  }
`
