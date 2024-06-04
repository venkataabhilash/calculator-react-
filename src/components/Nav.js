import React from 'react'
import { Link } from 'react-router-dom'
import './calc.css'

const Nav = () => {
  return (
    <>
        <div className='nav'>
        <Link to='/'>about</Link>
        <Link to='/calculator'>calculator</Link>
        <Link to='/animation'>animation</Link>
        </div>
    </>
  )
}

export default Nav