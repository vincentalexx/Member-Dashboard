import React from 'react'
import Loading from '../assets/loading.gif'

function Loader() {
  return (
    <div className='w-[32px]'>
        <img src={Loading} alt="loading" />
    </div>
  )
}

export default Loader