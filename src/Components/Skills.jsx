import React from 'react'
import "../styles/skills.css"
const Skills = () => {
    return (
        <div className="skills-main-div" >
            <h1 className="h1-heading">My Proficiency</h1>
            <div className="dev-fields">
                <div>
                    <div className="filed_logo_div">
                        <img src="https://img.icons8.com/ios/2x/react-native.png" alt="" />
                    </div>
                    <h3>Front End</h3>
                    <p>HTML, CSS, Javascript, React, Redux, Material UI.</p>
                </div>
                <div>
                    <div className="filed_logo_div">
                        <img className="dsa_logo" src="https://static.thenounproject.com/png/1871524-200.png" alt="" />
                    </div>
                    <h4 className="dsa_font">Data Structure & Algorithm</h4>
                    <p>Arrays,Stacks and Queues, Algorithms.</p>
                </div>
            </div>

            <div className="technical_skills">
                <h2 className="h1-heading">Tech Stacks</h2>
                <div className="text_stack_logo">
                    <div>
                        <img className="tech_stack_img" src="https://i0.wp.com/gafish.fr/wp-content/uploads/2013/03/html5.png?fit=512%2C512&ssl=1" alt="" />
                    </div>
                    <div>
                        <img className="tech_stack_img" src="https://cdn.worldvectorlogo.com/logos/css3.svg" alt="" />
                    </div>
                    <div>
                        <img className="tech_stack_img" src="https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png" alt="" />
                    </div>
                    <div>
                        <img className="tech_stack_img" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
                    </div>
                    <div>
                        <img className="tech_stack_img" src="https://cdn.iconscout.com/icon/free/png-512/redux-283024.png" alt="" />
                    </div>
                    <div>
                        <img className="tech_stack_img" src="https://material-ui.com/static/logo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
