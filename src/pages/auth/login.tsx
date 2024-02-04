import Link from 'next/link'
const LoginPage = () => {
  return (
    <div>
      <h1>LoginPage</h1>
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
