// import { useRouter } from 'next/router'

// const DetailProductPage = () => {
//   const router = useRouter()
//   return (
//     <div>
//       <h1>DetailProductPage</h1>
//       <p>Product ID: {router.query.id}</p>
//     </div>
//   )
// }

// export default DetailProductPage

// atau
import { useRouter } from 'next/router'

const DetailProductPage = () => {
  const { query } = useRouter()
  return (
    <div>
      <h1 className="text-3xl font-bold underline">DetailProductPage</h1>
      <p>Product ID: {query.id}</p>
    </div>
  )
}

export default DetailProductPage
