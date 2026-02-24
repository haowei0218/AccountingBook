import { throwError } from "../../middlewares/error.js"
import { GetUserById } from "../../repositories/user.repo.js"
import { VerifyUserByUserId } from "../../services/auth.js"

const QueryResolvers = {
  Query: {
    empty: () => 'ok',
    getUserById: async (parent, { userid }, { db }) => {
      try {
        const result = await VerifyUserByUserId(userid, db)
        return result
      } catch (e) {
        throwError(e)
      }


    }
  }
}

export default QueryResolvers