import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null)
  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])
  return (
    <div>
      <Head>
        <title>My App</title>
        <meta name="description" content="Generated by my app" />
      </Head>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>
        My name is {userData?.name} and I am {userData?.age} years old.
      </p>
    </div>
  )
}

interface UserData {
  name: string
  age: number
}
