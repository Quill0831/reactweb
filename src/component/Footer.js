import React from 'react'
import '../style/style.css'


const Footer = () => {
  return (
    <div > 
  <footer className='footer'>
   <p className='footerText'>客服信箱：alexlu0831@gmail.com</p> 
    <br />
    <p className='footerText'>Copyright © 2022,  Quill </p> 
    <br />
    <a href="https://www.linkedin.com/feed/"><img className='footerIcon' src={require("../img/linkedin.png")} alt="" /></a> 
    <a href="https://github.com/Quill0831/Quill0831"><img className='footerIcon' src={require("../img/github.png")} alt="" /></a> 
    <a href="https://www.cakeresume.com/alex-lu-08591a"><img className='footerIcon' src={require("../img/account.png")} alt="" /></a>
    </footer>
</div>
  )
}

export default Footer