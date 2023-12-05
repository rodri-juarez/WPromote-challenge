import {useQuery} from "@tanstack/react-query"
import {getProductList} from "../utils/getProductList"
import {GetProductListResponse} from "../types/products"

export const useProductList = () => {
  const {data: productList, isError, error} = useQuery({queryKey: ['productList'], queryFn: getProductList, select: (data: GetProductListResponse) => data.data.products.edges})

  return {productList, isError, error}
}
