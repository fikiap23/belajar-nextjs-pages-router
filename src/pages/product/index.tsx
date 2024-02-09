import { fetcher } from '@/lib/swr/fetcher'
import ProductView from '@/views/Product'

import useSWR from 'swr'

const ProductPage = () => {
  const { data, error, isLoading } = useSWR('/api/product', fetcher)

  return (
    <>
      <ProductView products={isLoading ? [] : data.data} />
    </>
  )
}

export default ProductPage
