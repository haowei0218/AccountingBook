import { client } from '../../main.tsx'
import { UserAuth } from './api.ts'
import { toast } from 'react-toastify'
import { type UserAuthData } from './types.ts'
import { useNavigate, useRoutes } from 'react-router-dom'
import MainContent from '../transactions/pages/MainContent.tsx'
export async function UserSignVerify(
  accountname: string,
  password: string
): Promise<any> {
  try {
    if (accountname.length === 0 || password.length === 0) {
      toast.error('帳號或密碼不可為空 請重新輸入')
      return 'EMPTY_ACCOUNT'
    } else if (accountname.length > 30 || password.length > 30) {
      toast.error('帳號或密碼長度過長 請重新輸入')
      return 'EMPTY_PASSWORD'
    } else if (!accountname.includes('@')) {
      toast.error('帳號必須符合Email格式:xxxxxx@xxx 請重新輸入')
      return 'INVALID_ACCOUNT'
    }
    const UserAuthResponse = await client.mutate<UserAuthData>({
      mutation: UserAuth,
      variables: { accountname, password },
    })

    const LoginResult = UserAuthResponse.data?.UserLogin.data

    if (!LoginResult) {
      toast.error('帳號或密碼錯誤 請重新輸入')
      return null
    } else {
      return LoginResult
    }
  } catch (e) {
    console.log('error : ', e)
  }
}
