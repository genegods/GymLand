import React from 'react'
import img1 from '../asserts/img1.png'
import img2 from '../asserts/img2.jpg'
import img3 from '../asserts/img3.jpg'

const TopContent = () => {
  return (
    <React.Fragment>
    <main>
      <div>
        <div className='bg-black centered mb-1'>
        <img src={img1} alt='image'
            className='h-96 md:h-full'
            />
        </div>
        <div className='grid grid-cols-2 gap-1 mb-1'>
        <img src={img2} alt='image' className='md:h-60'/>
        <img src={img3} alt='image' className='md:h-60'/>
        </div>
      </div>
    </main>
  </React.Fragment>
  )
}

export default TopContent