import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Preloader() {
  return (
    <div className="flex flex-col h-[70vh] items-center justify-center gap-4">
    <div className="flex-1 flex items-center justify-center">
      <DotLottieReact
        src="https://lottie.host/f909c14b-1af4-4f1b-915e-7b63b4928020/lXUzfo4Awb.lottie"
        loop
        autoplay
        className='w-[600px] h-[600px] object-cover'
      />
    </div>
    
  </div>
  )
}

export default Preloader