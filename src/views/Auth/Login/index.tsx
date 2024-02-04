import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import loginStyle from './login.module.css'

const LoginView = () => {
  const { push } = useRouter()
  const handleLogin = () => {
    push('/product')
  }
  return (
    <div className={loginStyle.login}>
      <h1>LoginPage</h1>
      <button
        onClick={handleLogin}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
      >
        Login
      </button>
      <p>
        {' '}
        Belum punya akun?{' '}
        <Link href="/auth/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </div>
  )
}

export default LoginView
