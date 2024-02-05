import { fetcher } from '@/lib/swr/fetcher'
import ProductView from '@/views/Product'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

const ProductPage = () => {
  const { push } = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  // const [products, setProducts] = useState([])

  useEffect(() => {
    if (!isLogin) {
      push('/auth/login')
    }
  }, [isLogin, push])

  const { data, error, isLoading } = useSWR('/api/product', fetcher)

  // useEffect(() => {
  //   fetch('/api/product').then((res) => {
  //     res.json().then((response) => {
  //       setProducts(response.data)
  //     })
  //   })
  // }, [])
  return (
    <>
      <ProductView products={isLoading ? [] : data.data} />
    </>
  )
}

export default ProductPage
