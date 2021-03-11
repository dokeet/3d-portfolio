import Link from 'next/link'

const BackButton = () => {
  return (
    <Link href='/'>
      <button className='absolute z-20 p-2 m-2 text-white focus:outline-none focus:ring'>
        Previous page
      </button>
    </Link>
  )
}

export default BackButton
