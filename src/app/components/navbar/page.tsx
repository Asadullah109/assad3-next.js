import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black h-12 text- yellow-400 flex justify between h-12 item center'>
    <div className='text-blue-400' >
    <h1>Navbar</h1>
    <ul className='flex gap-4'>
        <a href=''>Home</a>
        <a href=''>Contect</a>
        <a href=''>About</a>
    </ul>
    </div>
    </div>
  )
}

export default Navbar