import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/navbar.css"
const linkList = [
  {
    to: '/',
    title: 'Home'
  },
  {
    to: '/portfolio',
    title: 'Portfolio'
  },
  {
    to: '/projects',
    title: 'Projects'
  },
  {
    to: '/contact',
    title: 'Contact Me'
  },
  {
    to: '/resume',
    title: 'Resume'
  },
]

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <nav className="navbar">
      <h3 className="logo">Logo</h3>
      <ul className={isMobile ? "nav-Links-mobile" : "nav-Links"} onClick={() => setIsMobile(false)}>
        {linkList.map((item, i) =>
          <Link to={item.to} key={i} className={item.title}>
            <li>{item.title}</li>
          </Link>
        )}
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  )
}

export default NavBar

