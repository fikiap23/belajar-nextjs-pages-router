import { signIn, signOut, useSession } from 'next-auth/react'
import styleNavbar from './navbar.module.css'
const Navbar = () => {
  const { data }: any = useSession()
  // console.log(data)
  return (
    <nav className={styleNavbar.navbar}>
      <div>Navbar</div>
      <div>{data && data.user.fullname}</div>
      {data ? (
        <button onClick={() => signOut()}>SignOut</button>
      ) : (
        <button onClick={() => signIn()}>SignIn</button>
      )}
    </nav>
  )
}

export default Navbar
