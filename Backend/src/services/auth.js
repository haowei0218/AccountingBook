import { AuthError, BaseError, DuplicateError, ValidationError } from "../middlewares/error.js"
import { findUserEmail, GetUserById, InsertUser } from "../repositories/user.repo.js"
import { GraphQLError } from "graphql";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const PrivateKey = "some-long-random-string"

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

    const AuthenticationToken = jwt.sign({
      sub: findEmailResult.userid
    }, PrivateKey, { expiresIn: "2h" })


    return {
      data: findEmailResult,
      log: {
        message: "Login successfully!!",
        code: "1",
        serviceDate: new Date().toISOString()
      },
      token: AuthenticationToken
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
          serviceDate: new Date().toISOString()
        }
      }
    } else {
      const hashPassword = await bcrypt.hash(password, 10)
      const RegisterUserResult = await InsertUser(account, hashPassword, aliceName, userid, db)

      return {
        data: RegisterUserResult,
        log: {
          message: "Registration successful",
          code: "1",
          serviceDate: new Date().toISOString()
        }
      }
    }

  } catch (error) {
    throw new Error(error.message)
  }
}

export async function VerifyUserByUserId(userId, db) {
  try {
    const user = await GetUserById(userId, db)
    if (!user) {
      return {
        data: null,
        log: {
          message: BaseError.USER_NOT_FOUND,
          code: "0",
          serviceDate: new Date().toISOString()
        },
        token: ""
      }
    } else {
      return {
        data: user,
        log: {
          message: "Find user successfully",
          code: "1",
          serviceDate: new Date().toISOString()
        },
        token: ""
      }
    }
  } catch (e) {
    throw new GraphQLError(`Can not find user : ${e}`, {
      extensions: { code: "INVALID_CREDENTIALS" },
    });
  }
}

export function verifyToken(token) {
  const decoded = jwt.verify(token, PrivateKey)
  return decoded.sub ?? null
}

export function requireUserId(userId) {
  if (!userId) {
    throw new GraphQLError("Unauthenticated", {
      extensions: { code: "UNAUTHENTICATED" },
    });
  }
  return userId
}