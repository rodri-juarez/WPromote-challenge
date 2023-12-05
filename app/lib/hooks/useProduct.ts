import {useQuery} from "@tanstack/react-query"
import {getProduct} from "../utils/getProduct"
import {GetProductResponse} from "../types/products"


export const useProduct = (id: string) => {
  const {data: product, isError, error} = useQuery({queryKey: ['product', id], queryFn: () => getProduct(id), select: (data: GetProductResponse) => data.data.product, enabled: !!id})

  return {product, isError, error}
}
