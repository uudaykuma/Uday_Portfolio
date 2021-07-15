import React from 'react'
import '../styles/home.css'
const Home = () => {
    return (
        <div className="home-Mian-div">
            <div className="profile-pic-div">
                <img className="profile-img" src="https://media-exp1.licdn.com/dms/image/C5603AQFgbr3djRuu9A/profile-displayphoto-shrink_800_800/0/1615875058102?e=1631750400&v=beta&t=YbMY7PXB940KCrKajTXsFM74eAKwNheBgEVI5MZ-kK4" alt="" />
            </div>
            <div className="intro-div">
                <h1 className="h1">Hi, I am Uday Kumar</h1>
                <p className="p1">Full Stack Web Developer</p>
                <p className="p2">A passionate aspiring Full Stack Developer skilled in MERN stack,
                    moulded and shaped by Masai School's numerous trainings.Actively
                    ready to join in great living team of a good start-up to adapt me in any
                    situation and environment with ease and perform the best.</p>
            </div>
        </div>
    )
}

export default Home
