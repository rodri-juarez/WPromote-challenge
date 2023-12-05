import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-[100vh] gap-8'>
      <h2 className='font-semibold text-2xl'>Product Not Found</h2>
      <p>We could not find the product you are looking for</p>
      <Link href="/">
        <button className='bg-black text-white font-bold rounded-lg h-16 w-40'>
          Return Home
        </button>
      </Link>
    </div>
  )
}
