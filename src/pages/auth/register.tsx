import Link from 'next/link'

const RegisterPage = () => {
  return (
    <div>
      <h1>RegisterPage</h1>
      <p>
        {' '}
        Sudah punya akun?{' '}
        <Link href="/auth/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </div>
  )
}

export default RegisterPage
