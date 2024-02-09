import Link from 'next/link'
import styles from './register.module.scss'
import { useState } from 'react'
import { useRouter } from 'next/router'

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const { push } = useRouter()
  const handleRegister = async (event: any) => {
    event.preventDefault()
    setError('')
    setIsLoading(true)
    const data = {
      fullname: event.target.fullname.value,
      email: event.target.email.value,
      password: event.target.password.value,
    }
    const result = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (result.status === 200) {
      event.target.reset()
      setIsLoading(false)
      push('/auth/login')
    } else {
      setIsLoading(false)
      setError(
        result.status === 400 ? 'Email already exists' : 'Something went wrong'
      )
    }
  }
  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Register</h1>

      <div className={styles.register__form}>
        <form onSubmit={handleRegister}>
          <div className={styles.register__form__item}>
            <label
              htmlFor="fullname"
              className={styles.register__form__item__label}
            >
              Fullname
            </label>
            <input
              type="text"
              name="fullname"
              placeholder="Fullname"
              id="fullname"
              className={styles.register__form__item__input}
            />
          </div>
          <div className={styles.register__form__item}>
            <label
              htmlFor="email"
              className={styles.register__form__item__label}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              className={styles.register__form__item__input}
            />
          </div>
          <div className={styles.register__form__item}>
            <label
              htmlFor="password"
              className={styles.register__form__item__label}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              id="password"
              className={styles.register__form__item__input}
            />
          </div>
          {error && <p className={styles.register__error}>{error}</p>}
          <button
            type="submit"
            className={styles.register__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Register'}
          </button>
        </form>
      </div>
      <div className="text-center">
        Already have an account?{' '}
        <Link href="/auth/login" className="text-blue-500 font-bold">
          Login
        </Link>
      </div>
    </div>
  )
}

export default RegisterView
