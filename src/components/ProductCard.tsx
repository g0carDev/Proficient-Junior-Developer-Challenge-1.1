import { useEffect, useState } from 'react';
import { Counter } from "./Counter"
import './styles/ProductCard.styles.css'
import type { IProduct } from "../interface"

interface Props {
  productInfo: IProduct
  onSelectProduct: (product: IProduct) => void
  onRemoveProduct: (productId: number) => void
  isClear: boolean
}
export const ProductCard = ({ productInfo, onSelectProduct, onRemoveProduct, isClear }: Props) => {
  const { name, icon } = productInfo
  const [count, setCount] = useState(0)

  useEffect(() => {
   if (isClear) {
    setCount(0)
   }
  }, [isClear])
  

  const handleCount = (value: number) => {
    if (count + value < 0) return setCount(0)
    if(count + value > count){
      onSelectProduct(productInfo)
    }else{
      onRemoveProduct(productInfo.id)
    }
    setCount(count + value)
  }

  return (
    <div>
      <div className="card">
        <img src={`assets/icons/${icon}.svg`} alt={name} />
        <span className="product__name">{name}</span>
      </div>
      <Counter count={count} handleCount={handleCount} />
    </div>
  )
}
