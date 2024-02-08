import { useRouter } from 'next/router'

const ShopPage = () => {
  const { query } = useRouter()
  console.log(query)
  return (
    <div>
      <h1 className="text-3xl font-bold underline">ShopPage</h1>
      <p>Slug: {query.slug}</p>
    </div>
  )
}

export default ShopPage
