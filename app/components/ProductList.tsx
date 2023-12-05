'use client'

import {ProductCard} from "./ProductCard"
import {ProductsEdge} from "../lib/types/products"
import {useProductList} from "../lib/hooks/useProductsList"

export default function ProductList() {
  const {productList, isError, error} = useProductList()

  if (isError) {
    return <span>Error: {error?.message}</span>
  }

  return (
    <section className="flex flex-col items-center sm:grid sm:grid-cols-3 sm:place-items-center sm:justify-between gap-4 gap-y-6">
      {
        productList ? productList.map((product: ProductsEdge) => {
          return <ProductCard key={product.node.id} product={product.node} />
        }) : null
      }
    </section >
  )
}
