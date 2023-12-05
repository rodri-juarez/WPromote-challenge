import Image from "next/image"
import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Product Page',
  description: 'Find the best articles and all you need.',
}


const ProductDetailPage = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center max-w-6xl mx-auto h-[100vh]">
      <div className="grid gap-6 items-start">
        <Image
          src="https://cdn.shopify.com/s/files/1/0688/1755/1382/products/slides.jpg?v=1675447358"
          alt="Product Image"
          width="600"
          height="600"
          className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
        />
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl">Product Name</h1>
          <div className="flex flex-col gap-2">
            <p className="text-5xl text-gray-800 font-normal">$99.99</p>
            <p className="text-lg text-gray-800">in 12x $8.33 each</p>
          </div>
        </div>
        <p id="product-description">
          This high-quality crewneck is perfect for your everyday look. Made with 100% cotton, its soft, comfortable,
          and undeniably stylish. Full sleeved for a classic look and effortlessly versatile, this cotton crewneck is a must-have in any wardrobe.
        </p>
        <div className="flex space-x-3">
          <button className="w-10 py-2 px-2 text-sm rounded-md border-solid border-2 border-black">
            XS
          </button>
          <button className="w-10 py-2 px-2 text-sm rounded-md border-solid border-2 border-black">
            S
          </button>
          <button className="w-10 py-2 px-2 text-sm rounded-md border-solid border-2 border-black">
            M
          </button>
          <button className="w-10 py-2 px-2 text-sm rounded-md border-solid border-2 border-black">
            XL
          </button>
          <button className="w-12 py-2 px-2 text-sm rounded-md border-solid border-2 border-black">
            XXL
          </button>
        </div>
        <div className="grid gap-4">
          <button className="inline-flex items-center justify-center text-lg font-medium h-11 rounded-md px-8 bg-black text-white">
            Shop Now
          </button>
          <button className="inline-flex items-center justify-center text-lg font-medium border-solid border-2 border-black h-11 rounded-md px-8">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage


