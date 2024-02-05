import ProductView from '@/views/Product'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ProductPage = () => {
  const { push } = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (!isLogin) {
      push('/auth/login')
    }
  }, [isLogin, push])

  useEffect(() => {
    fetch('/api/product').then((res) => {
      res.json().then((response) => {
        setProducts(response.data)
      })
    })
  }, [])
  return (
    <>
      <ProductView products={products} />
    </>
  )
}

export default ProductPage
