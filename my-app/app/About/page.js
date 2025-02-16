import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='pt-20'>
      <div className='absolute z-[-1] w-full h-56'>
        <Image src="/2.png" layout="fill" objectFit="fit" alt="background" />

      </div>
      <div className='w-full mx-auto text-center font-bold text-5xl mt-8 h-32'>
        About US...
      </div>
      <div className='flex m-2 p-2 font-bold text-xl'>
        <div>
          We are a virtual reality (VR) application designed for children with autism aged 7-15.
        We focus on motor skill development, social interactions, and cognitive enhancement of neurodiverse children.
        </div>
        <div className='w-full'>

        </div>
      </div>
    </div>
  )
}

export default page
