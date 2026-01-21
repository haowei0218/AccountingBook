import { AuthError, BaseError, DuplicateError, ValidationError } from "../middlewares/error.js"
import { findUserEmail, InsertUser } from "../repositories/user.repo.js"
import { GraphQLError } from "graphql";
import bcrypt from 'bcrypt'

export async function UserAuthentication(account, password, db) {

  if (!account || !password) {
    throw new GraphQLError("Missing account or password", {
      extensions: { code: "BAD_REQUEST" },
    });
  }

  const findEmailResult = await findUserEmail(account, db)


  if (!findEmailResult) {
    throw new GraphQLError("Invalid account or password", {
      extensions: { code: "INVALID_CREDENTIALS" },
    });
  }
  const comparePasswordResult = await bcrypt.compare(password, findEmailResult.password)

  if (comparePasswordResult) {
    return {
      data: [findEmailResult],
      log: {
        message: "Login successfully!!",
        code: "1",
        serviceDate: new Date().getTime()
      }
    }
  } else {
    throw new GraphQLError("Invalid account or password", {
      extensions: { code: "INVALID_CREDENTIALS" },
    });
  }


}

export async function UserRegister(account, password, aliceName, userid, db) {
  try {
    const isDuplicateEmail = await findUserEmail(account, db)
    if (isDuplicateEmail) {
      return {
        data: null,
        log: {
          message: DuplicateError.DUPLICATE_EMAIL,
          code: "0",
          serviceDate: new Date().getTime()
        }
      }
    } else {
      const hashPassword = await bcrypt.hash(password, 10)
      const RegisterUserResult = await InsertUser(account, hashPassword, aliceName, userid, db)

      return {
        data: [RegisterUserResult],
        log: {
          message: "Registration successful",
          code: "1",
          serviceDate: new Date().getTime()
        }
      }
    }

  } catch (error) {
    throw new Error(error.message)
  }
}