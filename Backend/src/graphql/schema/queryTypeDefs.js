import { gql } from "graphql-tag";
import { User, AuthUserResponse } from "./typeDefs.js";
const QueryTypeDefs = gql`

  ${AuthUserResponse}
  type Query{
    UserLogin(accountname:String!,password:String!):AuthUserResponse!
  }
`

export default QueryTypeDefs