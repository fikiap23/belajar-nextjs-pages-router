import { fetcher } from '@/lib/swr/fetcher'
import DetailProductView from '@/views/DetailProduct'
import { useRouter } from 'next/router'
import useSWR from 'swr'

const DetailProductPage = () => {
  const { query } = useRouter()
  const { data, error, isLoading } = useSWR(`/api/product/${query.id}`, fetcher)
  // console.log(data)
  return (
    <div>
      <DetailProductView product={isLoading ? {} : data.data} />
    </div>
  )
}

export default DetailProductPage
