import { gql } from "graphql-tag";


export const User = gql`
  type User{
    userid:String!
    accountname:String!
    password:String!
    alicename:String!
  }
`

export const ResponseLog = gql`
  type ResponseLog{
    message:String!
    code:String!
    serviceDate:String!
  }
`
export const AuthUserResponse = gql`
  type AuthUserResponse{
    data:[User!]
    log:ResponseLog!
  }

`