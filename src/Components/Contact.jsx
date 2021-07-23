import React from 'react'
import "../styles/contact.css"
const Contact = () => {
    return (
        <div className="contact_div">
            <i style={{color:"#03203c"}} class="fa fa-paper-plane fa-3x" aria-hidden="true"></i>
            <h1 className="contact_head">GET IN TOUCH!</h1>
            <div className="contact_section">
                <div>
                    <i style={{padding:"10px"}} class="fas fa-envelope-open-text fa-3x"></i>
                    <h2 className="contact_h2_headings">Drop me a mail!</h2>
                    <h3 className="contact_h3_headings">uudaykuma@gmail.com</h3>
                </div>
                <div>
                    <i style={{padding:"10px"}} class="fas fa-phone-volume fa-3x"></i>
                    <h2 className="contact_h2_headings">Mobile Number!</h2>
                    <h3 className="contact_h3_headings">7488209296</h3>
                </div>
                <div>
                    <i style={{padding:"10px"}} class="fab fa-linkedin-in fa-3x"></i>
                    <h2 className="contact_h2_headings">Drop me a message!</h2>
                    <h3 className="contact_h3_headings"><a href="https://www.linkedin.com/in/uday-kumar-97069a121/" rel="noreferrer" target="_blank" >Go To Linkedin</a></h3>
                </div>
            </div>
        </div>
    )
}

export default Contact
