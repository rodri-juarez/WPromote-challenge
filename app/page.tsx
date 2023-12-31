import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import {getProductList} from './lib/utils/getProductList'
import ProductList from './components/ProductList'

export default async function Home() {

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['productList'],
    queryFn: getProductList,
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-7xl w-full items-center justify-between font-mono text-sm lg:flex">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ProductList />
        </HydrationBoundary>
      </div>
    </main>
  )
}
