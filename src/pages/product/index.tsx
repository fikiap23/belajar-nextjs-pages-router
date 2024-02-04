import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type productType = {
  id: number
  name: string
  price: number
  size: string
}
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
    <div>
      <h1 className="text-3xl font-bold ">ProductPage</h1>
      {/* product table */}
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: productType, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductPage
