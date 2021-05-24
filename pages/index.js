import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { useRef } from 'react'

export default function Home() {

  const searchInputRef = useRef(null)
  const router = useRouter()

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if(!term) return

    router.push(`/search?term=${term}`)

    }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between text-sm text-gray-700 w-full p-5 ">
        {/* Left Div */}
        <div className='flex space-x-4 items-center '>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        {/* Right Div */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          {/* Icons*/}

          
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer'/>

          <Avatar url='data:image/jpeg;base64,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' />
        </div>
      </header>

      <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
        <Image src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' height={100} width={300}/>

        <div className='flex w-full shadow-sm mt-5 hover:shadow-lg px-5 py-3 items-center focus-within:shadow-lg max-w-md sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-1 text-gray-500 hover:cursor-pointer'/>
          <input ref={searchInputRef} type='text' className='focus:outline-none flex-grow' />
          <MicrophoneIcon className='h-5 ml-1 text-gray-500 hover:cursor-pointer' />
        </div>

        <div className='flex flex-col w-1/2 mt-8 space-y-2 justify-center sm:flex-row sm:space-x-4 sm:space-y-0'>
          <button className='btn' onClick={search}>Google Search</button>
          <button className='btn' onClick={search}>I'm Feeling Lucky</button>
        </div>
      </form>

      <Footer />
    </div>
  )
}
