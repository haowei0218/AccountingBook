import { client } from '../../main.tsx'
import { UserAuth } from './api.ts'
import { toast } from 'react-toastify'
import { type UserAuthData } from './types.ts'
import { useNavigate, useRoutes } from 'react-router-dom'
import MainContent from '../transactions/pages/MainContent.tsx'
import { UserSignVerify } from './service.ts'
export async function useLoginAuth(accountname: string, password: string) {
  try {
    const LoginResult = await UserSignVerify(accountname, password)
    if (LoginResult === 'EMPTY_ACCOUNT')
      toast.error('帳號或密碼不可為空 請重新輸入')
    else if (LoginResult === 'EMPTY_PASSWORD')
      toast.error('帳號或密碼長度過長 請重新輸入')
    else if (LoginResult === 'INVALID_ACCOUNT')
      toast.error('帳號必須符合Email格式:xxxxxx@xxx 請重新輸入')
    else if (!LoginResult) toast.error('帳號或密碼錯誤 請重新輸入')
    else if (LoginResult.length > 0) {
      toast.success('登入成功')
      return 'ok'
    }
  } catch (e) {
    console.log('error : ', e)
  }
}
