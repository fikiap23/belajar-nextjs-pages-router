import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ProductPage = () => {
  const { push } = useRouter()
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    if (!isLogin) {
      push('/auth/login')
    }
  }, [isLogin, push])
  return <div>ProductPage</div>
}

export default ProductPage
