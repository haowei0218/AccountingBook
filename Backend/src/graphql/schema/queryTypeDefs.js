import { gql } from 'graphql-tag'
import { User, AuthUserResponse } from './typeDefs.js'
const QueryTypeDefs = gql`
  ${AuthUserResponse}
  type Query {
    empty: String
    getUserById(userid: String!): AuthUserResponse!
  }
`

export default QueryTypeDefs
