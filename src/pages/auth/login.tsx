import Link from 'next/link'
import { useRouter } from 'next/router'
const LoginPage = () => {
  const { push } = useRouter()
  const handlerLogin = () => {
    push('/product')
  }
  return (
    <div>
      <h1>LoginPage</h1>
      <button
        onClick={handlerLogin}
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

export default LoginPage
