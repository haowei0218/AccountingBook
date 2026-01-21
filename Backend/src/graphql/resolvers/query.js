import { UserAuthentication } from "../../services/auth.js"
import { throwError } from "../../middlewares/error.js"
const QueryResolvers = {
  Query: {
    UserLogin: async (parent, { accountname, password }, { db }) => {
      try {
        const UserAuthenticationResult = await UserAuthentication(accountname, password, db)
        return UserAuthenticationResult
      } catch (error) {
        throwError(error)
      }
    }
  }
}

export default QueryResolvers