import { gql } from "graphql-tag";
import { User, AuthUserResponse } from "./typeDefs.js";
const MutationTypeDefs = gql`
  ${AuthUserResponse}
  type Mutation{
    UserRegister(accountname:String!,password:String!,alicename:String):AuthUserResponse!
  }
`


export default MutationTypeDefs