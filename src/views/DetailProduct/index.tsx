import { ProductType } from '@/types/product.type'
import styles from './detailProduct.module.scss'
const DetailProductView = ({ product }: { product: ProductType }) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        DetailProductPage
      </h1>
      <div className={styles.productDetail}>
        <div className={styles.productDetail__image}>
          <img src={product.img} alt={product.name} />
        </div>
        <h4 className={styles.productDetail__name}>{product.name}</h4>
        <p className={styles.productDetail__category}>{product.category}</p>
        <p className={styles.productDetail__price}>
          {product.price &&
            product.price.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
            })}
        </p>
      </div>
    </>
  )
}

export default DetailProductView
