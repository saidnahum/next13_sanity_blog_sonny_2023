import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image 
            src='https://links.papareact.com/1m8'
            width={50}
            height={50}
            alt='logo'
            className='rounded-full'
          />
        </Link>
        <h1>The PIXELWEB</h1>
      </div>

      <div>
        <Link 
          href='https://saidn.tech'
          className='bg-gray-900 text-[#F7AB0A] px-5 py-3 rounded-full text-sm md:text-base flex items-center text-center'
          target='_blank'
        >
          Visit my awesome Website
        </Link>
      </div>
    </header>
  )
}

export default Header