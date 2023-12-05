'use client'

import {useQuery} from "@tanstack/react-query"
import {ProductCard} from "./ProductCard"
import {getProductsList} from "../lib/utils/getProductsList"
import {Product} from "../lib/types/products"

export default function ProductList() {

  const {data, isPending, isError, error} = useQuery({queryKey: ['productsList'], queryFn: getProductsList})
  const productsList = data.data.products?.edges;


  return (
    <section className="flex flex-col items-center sm:grid sm:grid-cols-3 sm:place-items-center sm:justify-between gap-4 gap-y-6">
      {
        productsList && productsList.map((product: Product) => {
          return <ProductCard key={product.id} />
        })
      }
    </section >
  )
}
