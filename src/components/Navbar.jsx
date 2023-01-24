import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">ChalkIT</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>rana</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar