import React, { useState } from 'react'
import "../styles/navbar.css"

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false)
  const hadnleScrolling = (e) => {
    e.preventDefault()
    const target = e.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop
    console.log(target, location)

    window.scrollTo({
      left: 0,
      top: location-50
    })
  }
  return (
    <>
      <nav className="navbar">
        <h3 className="logo">Uday Kumar</h3>
        <ul className={isMobile ? "nav-Links-mobile" : "nav-Links"} onClick={() => setIsMobile(false)}>

          <a onClick={hadnleScrolling} href="#home" className="Home">Home</a>


          <a onClick={hadnleScrolling} href="#skills" className="Skills">Skills</a>


          <a onClick={hadnleScrolling} href="#projects" className="Projects">Projects</a>


          <a onClick={hadnleScrolling} href="#contact" className="Contact">Contact</a>




          <a className="Resume" href="https://drive.google.com/file/d/1YDBgoXNkAIdN9S4ZP3FZVUeuxoA6RIqU/view?usp=sharing" target="_blank" rel="noreferrer">
            Resume <i class="fa fa-download" aria-hidden="true"></i>
          </a>
          
        </ul>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
      </nav>
    </>
  )
}

export default NavBar

