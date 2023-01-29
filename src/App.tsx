import { useState } from 'react';
import { Button, Footer, Header, ProductCard, SummaryCard } from "./components"
import { products } from './utils';
import type { IProduct } from "./interface";

function App() {
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([])
  const [isClear, setIsClear] = useState<boolean>(false)

  const onSelectProduct = (product: IProduct) => {
    const isProductSelected = selectedProducts.some(selectedProduct => selectedProduct.id === product.id)
    if (isProductSelected) {
      const newSelectedProducts = selectedProducts.map(selectedProduct => {
        if (selectedProduct.id === product.id) {
          selectedProduct.amount += 1;
        }
        return selectedProduct;
      })
      setSelectedProducts(newSelectedProducts)
    } else {
      product.amount = 1;
      setSelectedProducts([...selectedProducts, product])
    }
  }

  const onRemoveProduct = (productId: number) => {
    const isProductSelected = selectedProducts.find(selectedProduct => selectedProduct.id === productId)
    if (!isProductSelected) return;
    if (isProductSelected.amount === 1) {
      const newSelectedProducts = selectedProducts.filter(selectedProduct => selectedProduct.id !== productId)
      setSelectedProducts(newSelectedProducts)
      return;
    }
    const newSelectedProducts = selectedProducts.map(selectedProduct => {
      if (selectedProduct.id === productId) {
        selectedProduct.amount -= 1;
      }
      return selectedProduct;
    })
    setSelectedProducts(newSelectedProducts)
  }

  const onClear = () => {
    setIsClear(true)
    setSelectedProducts([])
    setTimeout(() => {
      setIsClear(false)
    }, 1000);
  }

  const totalItems = selectedProducts.reduce((acc, { amount }) => acc + amount, 0)
  const totalSize = selectedProducts.reduce((acc, { amount, size }) => acc + (amount * size), 0).toFixed(2)


  return (
    <>
      <Header />
      <div className="container">
        <h1 className="title">What items to store?</h1>
        <p className="p">Select which items you wish to store before moving to your new home. We’ll keep ’em safe!</p>
        <section className="products">
          {
            products().map(product => (
              <ProductCard key={product.id} productInfo={product} onSelectProduct={onSelectProduct} onRemoveProduct={onRemoveProduct} isClear={isClear} />
            ))
          }
          <Button text="Clear" onClick={onClear} />
        </section>
        <SummaryCard totalItems={totalItems} totalSize={Number(totalSize)} />
      </div>
      <Footer />
    </>
  )
}

export default App
