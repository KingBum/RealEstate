import React from 'react'
import "./footer.css"
import {logo, Fb, Quiz, In, Insta, Be} from "../../assets/images/index"
import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <div className='footer'>
        <div className="leftFooter">
            <Link to="/">
                <img className='logo iconFooter' src={logo} alt="" />
            </Link>
            <div className='titleFooter'>Contact Us</div>
            <div className='infoFooter'>
                <span>Call : +123 400 123</span>
                <span>Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</span>
                <span>Email: example@mail.com</span>
            </div>
            <div className='listIconFooter'>
                <img className='iconMeidum iconFooter' src={Fb} alt="" />
                <img className='iconMeidum iconFooter' src={Quiz} alt="" />
                <img className='iconMeidum iconFooter' src={In} alt="" />
                <img className='iconMeidum iconFooter' src={Insta} alt="" />
                <img className='iconMeidum iconFooter' src={Be} alt="" />
            </div>
        </div>
        <div className="itemFooter">
            <div className='titleFooter'>Features</div>
            <div className='infoFooter'>
                <span>Home</span>
                <span>Become a Host</span>
                <span>Pricing</span>
                <span>Blog</span>
                <span>Contact</span>
            </div>
        </div>
        <div className="itemFooter">
            <div className='titleFooter'>Company</div>
            <div className='infoFooter'>
                <span>About Us</span>
                <span>Press</span>
                <span>Contact</span>
                <span>Careers</span>
                <span>Blog</span>
            </div>
        </div>
        <div className="itemFooter">
            <div className='titleFooter'>Team and policies</div>
            <div className='infoFooter'>
                <span>Terms of servies</span>
                <span>Privacy Policy</span>
                <span>Security</span>
            </div>
        </div>
    </div>
  )
}
