import React, { useState, type ChangeEvent } from 'react'
import { IoPersonCircle } from 'react-icons/io5'
import { IoIosPerson } from 'react-icons/io'
import { FaSquareFacebook } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { LoginPageLayout } from '../../../layout/login_layout'
import InputBox from '../components/InputBox'
import { useLoginAuth } from '../hook'

const style = {
  loginPage: 'bg-',
}

function Login() {
  const [Account, setAccount] = useState<string>('')
  const [Password, setPassword] = useState('')
  const navigate = useNavigate()

  function OnAccountChangeListener(event: ChangeEvent<HTMLInputElement>) {
    console.log('account : ', event.target.value)
    setAccount(event.target.value)
  }
  function OnPasswordChangeListener(event: ChangeEvent<HTMLInputElement>) {
    console.log('password : ', event.target.value)
    setPassword(event.target.value)
  }

  async function LoginFn(accountname: string, password: string) {
    const result = await useLoginAuth(accountname, password)
    console.log(result)
    if (result === 'ok') {
      navigate('/app')
    }
  }

  return (
    <div className='flex justify-center w-full h-full mainContent'>
      <div className='loginCard grid w-[430px] h-[550px] justify-center gap-5 pr-3 pl-3 bg-white shadow-xs rounded-4xl shadow-blue-400 m-auto'>
        <div className='title grid content-center w-[350px] h-[130px] items-center justify-items-center gap-0.5 '>
          <IoPersonCircle className='text-blue-400 text-8xl' />
          <h3 className='text-3xl'>登入</h3>
        </div>

        <div className='loginContainer grid justify-center items-center gap-6  w-[350px] h-[350px] border-t-[1px] border-gray-300 '>
          <div className='grid w-[350px] h-[140px] gap-2 '>
            <InputBox
              inputType='text'
              placeholderContent='Email or Username'
              cssStyle={LoginPageLayout.InputBox}
              eventListenerFn={OnAccountChangeListener}
            />
            <InputBox
              inputType='password'
              placeholderContent='Password'
              cssStyle={LoginPageLayout.InputBox}
              eventListenerFn={OnPasswordChangeListener}
            />
            <button
              onClick={() => {
                LoginFn(Account, Password)
              }}
              className='SignInBtn w-[350px] h-[40px] text-white bg-blue-400 rounded-4xl mt-5'
            >
              確定
            </button>
          </div>

          <div className='flex items-center gap-4 my-6'>
            <div className='flex-1 h-px bg-gray-200' />
            <span className='text-xs text-gray-400'>or</span>
            <div className='flex-1 h-px bg-gray-200' />
          </div>

          <div className='flex w-full h-full gap-2 OtherLoginOptionBtn'>
            <button
              className={`${LoginPageLayout.SignInWithOtherOption} text-gray-500 bg-white `}
            >
              <FcGoogle className='text-4xl' />
              使用Google登入
            </button>
            <button
              className={`${LoginPageLayout.SignInWithOtherOption} text-white bg-blue-500 `}
            >
              <FaSquareFacebook className='text-4xl' />
              使用FB登入
            </button>
          </div>
          <div className='flex items-center justify-center OtherOption'>
            <h4>還沒有帳戶嗎??</h4>
            <Link
              className='text-blue-500 hover:text-blue-800'
              to={{ pathname: '/RegisterPage' }}
            >
              建立帳戶
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
