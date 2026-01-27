import React from 'react'
import { IoPersonCircle } from 'react-icons/io5'
import { IoIosPerson } from 'react-icons/io'
import { FaSquareFacebook } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
const style = {
  loginPage: 'bg-',
}

function Login() {
  return (
    <div className='flex justify-center w-full h-full mainContent'>
      <div className='loginCard grid w-[430px] h-[550px] justify-center gap-5 pr-3 pl-3 bg-white shadow-xs rounded-4xl shadow-blue-400 m-auto'>
        <div className='title grid content-center w-[350px] h-[130px] items-center justify-items-center gap-0.5 '>
          <IoPersonCircle className='text-blue-400 text-8xl' />
          <h3 className='text-3xl'>登入</h3>
        </div>

        <div className='loginContainer grid justify-center items-center gap-6  w-[350px] h-[350px] border-t-[1px] border-gray-300 '>
          <div className='grid w-[350px] h-[140px] gap-2 '>
            <input
              type='text'
              placeholder='Email or Username'
              className='w-[350px] h-[40px] text-xs mt-4 pl-10 border-1 border-spacing-0.5 bg-[rgba(238,234,234,0.36)] rounded-xl border-[rgba(238,234,234,0.9)]'
            ></input>
            <input
              type='password'
              placeholder={'Password'}
              className='w-[350px] h-[40px] text-xs mt-2 pl-10 border-1 border-spacing-0.5 bg-[rgba(238,234,234,0.36)] rounded-xl border-[rgba(238,234,234,0.9)]'
            ></input>
            <button className='SignInBtn w-[350px] h-[40px] text-white bg-blue-400 rounded-4xl mt-5'>
              確定
            </button>
          </div>

          <div className='flex items-center gap-4 my-6'>
            <div className='flex-1 h-px bg-gray-200' />
            <span className='text-xs text-gray-400'>or</span>
            <div className='flex-1 h-px bg-gray-200' />
          </div>

          <div className='flex w-full h-full gap-2 OtherLoginOptionBtn'>
            <button className='flex items-center justify-center text-gray-500 gap-2 border-[1px] w-[170px] h-[50px] rounded-xl border-[rgba(238,234,234,0.9)]'>
              <FcGoogle className='text-4xl' />
              使用Google登入
            </button>
            <button className='flex items-center justify-center gap-2 bg-blue-500 text-white border-[1px] w-[180px] h-[50px] rounded-xl border-[rgba(238,234,234,0.9)]'>
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
