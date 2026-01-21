import { UserRegister } from "../../services/auth.js"
import { nanoid } from 'nanoid'
import { throwError } from "../../middlewares/error.js"
export const MutationResolvers = {
  Mutation: {
    UserRegister: async (parent, { accountname, password, alicename }, { db }) => {
      try {
        const UUID = "UID" + "_" + nanoid().slice(0, 15)
        const RegirsterUserResult = await UserRegister(accountname, password, alicename, UUID, db)
        return RegirsterUserResult
      } catch (e) {
        throwError(e)
      }
    }
  }
}