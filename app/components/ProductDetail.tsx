'use client'

import Image from 'next/image'
import React, {useState} from 'react'
import {useSearchParams} from 'next/navigation'
import {ProductsEdge} from '../lib/types/products'
import {Alert} from '@material-tailwind/react'
import Link from 'next/link'
import {useProductList} from '../lib/hooks/useProductsList'
import {useProduct} from '../lib/hooks/useProduct'

const ProductDetail = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState('XS');

  const searchParams = useSearchParams()

  const id = searchParams.get('id') ?? '';

  const {product, isError, error} = useProduct(id)

  // Another way to do this is to filter out products that are already in memory and avoid making the call.
  /*   const {productList, isError, error} = useProductList()
      const product = productList?.find((product: ProductsEdge) => product.node.id === id)?.node
   */
  // To convert the component in a server component one option could be send the product data in query params

  if (isError) {
    return <span>Error: {error?.message}</span>
  }

  if (!product) {
    return <span>Error: Product not exist</span>
  }

  return (
    <>
      <div className='flex mt-8 h-12 w-full justify-center items-center'>
        <Alert open={open} className='w-1/2'>
          Thank you for your purchase!
        </Alert>
      </div>
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center max-w-6xl mx-auto mb-24 h-[90vh]">
        <div className="grid gap-6 items-start">
          <Image
            src={product.featuredImage.url}
            alt="Product Image"
            width="600"
            height="600"
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
          />
        </div>
        <div className="grid gap-4 md:gap-10 items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl">{product.title}</h1>
            <div className="flex flex-col gap-2">
              <p className="text-5xl text-gray-800 font-normal">$99.99</p>
              <p className="text-lg text-gray-800">in 12x $8.33 each</p>
            </div>
          </div>
          <p id="product-description">
            {product.description}
          </p>
          <div className="flex space-x-3">
            <button onClick={() => setSize('XS')} className={`w-10 py-2 px-2 text-sm rounded-md border-solid border-2 border-black ${size === 'XS' && 'bg-black text-white'}`}>
              XS
            </button>
            <button onClick={() => setSize('S')} className={`w-10 py-2 px-2 text-sm rounded-md border-solid border-2 border-black ${size === 'S' && 'bg-black text-white'}`}>
              S
            </button>
            <button onClick={() => setSize('M')} className={`w-10 py-2 px-2 text-sm rounded-md border-solid border-2 border-black ${size === 'M' && 'bg-black text-white'}`}>
              M
            </button>
            <button onClick={() => setSize('XL')} className={`w-10 py-2 px-2 text-sm rounded-md border-solid border-2 border-black ${size === 'XL' && 'bg-black text-white'}`}>
              XL
            </button>
            <button onClick={() => setSize('XXL')} className={`w-12 py-2 px-2 text-sm rounded-md border-solid border-2 border-black ${size === 'XXL' && 'bg-black text-white'}`}>
              XXL
            </button>
          </div>
          <div className="grid gap-4">
            {open ?
              <Link href={'/'}>
                <button className="items-center text-lg font-semibold h-11 rounded-md px-8 bg-black text-white hover:opacity-75">
                  Go to cart
                </button>
              </Link>
              : (
                <>
                  <button onClick={() => setOpen(true)} className="items-center text-lg font-semibold h-11 rounded-md px-8 bg-black text-white hover:opacity-75">
                    Shop Now
                  </button>
                  <button onClick={() => setOpen(true)} className="items-center text-lg font-semibold border-solid border-2 border-black h-11 rounded-md px-8 hover:bg-gray-300">
                    Add to cart
                  </button>
                </>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
