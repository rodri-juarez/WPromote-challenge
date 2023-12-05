import {Metadata} from 'next'
import {HydrationBoundary, QueryClient, dehydrate} from "@tanstack/react-query"
import {getProduct} from "../lib/utils/getProduct"
import ProductDetail from "../components/ProductDetail"

export const metadata: Metadata = {
  title: 'Product Page',
  description: 'Find the best articles and all you need.',
}


const ProductDetailPage = async ({
  searchParams,
}: {
  searchParams: {[key: string]: string}
}) => {

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['product', searchParams.id],
    queryFn: () => getProduct(searchParams.id),
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductDetail />
    </HydrationBoundary>
  )
}

export default ProductDetailPage


