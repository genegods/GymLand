import React from 'react'
import DownContent from './DownContent'
import TopContent from './TopContent'

const Hero = () => {
  return (
    <React.Fragment>
    <main>
      <div className='my-1 h-screen md:grid md:grid-cols-2 md:gap-1'>
         <div className=" "><TopContent/></div>
         <div className=""><DownContent/></div>
      </div>
    </main>
  </React.Fragment>
  )
}

export default Hero