import { useSession } from 'next-auth/react'
import React from 'react'

const ProfilePage = () => {
  const { data }: any = useSession()
  return (
    <div>
      <h1>ProfilePage</h1>
      <p>Fullname: {data && data.user.fullname}</p>
      <p>Email: {data && data.user.email}</p>
    </div>
  )
}

export default ProfilePage
