import { gql } from 'graphql-tag'
import { User, AuthUserResponse } from './typeDefs.js'
const QueryTypeDefs = gql`
  type Query {
    empty: String
  }
`

export default QueryTypeDefs
