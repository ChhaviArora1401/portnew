import React from 'react'

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <span className='menu-bars'>
        <i class="fa-solid fa-bars" onClick={() => props.setSidebar(!props.sidebar)}></i>
      </span>
    </div>
  )
}

export default Navbar