import { fetcher } from '@/lib/swr/fetcher'
import { ProductType } from '@/types/product.type'
import DetailProductView from '@/views/DetailProduct'
import { useRouter } from 'next/router'
import useSWR from 'swr'

// CSR
// const DetailProductPage = () => {
//   const { query } = useRouter()
//   const { data, error, isLoading } = useSWR(`/api/product/${query.id}`, fetcher)
//   // console.log(data)
//   return (
//     <div>
//       <DetailProductView product={isLoading ? {} : data.data} />
//     </div>
//   )
// }

// export default DetailProductPage

// SSR
// const DetailProductPage = ({ product }: { product: ProductType }) => {
//   return (
//     <div>
//       <DetailProductView product={product} />
//     </div>
//   )
// }

// export default DetailProductPage

// export async function getServerSideProps({
//   params,
// }: {
//   params: { id: string }
// }) {
//   // console.log(params.id)
//   // fetch data
//   const res = await fetch(`http://localhost:3000/api/product/${params.id}`)
//   const response = await res.json()
//   //   console.log(response)

//   return {
//     props: {
//       product: response.data,
//     },
//   }
// }

// SSG
const DetailProductPage = ({ product }: { product: ProductType }) => {
  return (
    <div>
      <DetailProductView product={product} />
    </div>
  )
}

export default DetailProductPage

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/product')
  const response = await res.json()

  const paths = response.data.map((product: ProductType) => ({
    params: { id: product.id },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  // console.log(params.id)
  // fetch data
  const res = await fetch(`http://localhost:3000/api/product/${params.id}`)
  const response = await res.json()
  //   console.log(response)

  return {
    props: {
      product: response.data,
    },
  }
}
