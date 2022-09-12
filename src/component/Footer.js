import React from 'react';
import '../style/style.css';
import linkedin from '../img/linkedin.png';
import github from '../img/github.png';
import cakeresume from '../img/account.png';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <p className="footerText">客服信箱：alexlu0831@gmail.com</p>
        <br />
        <p className="footerText">Copyright © 2022,  Quill </p>
        <br />
        <a href="https://www.linkedin.com/feed/"><img className="footerIcon" src={linkedin} alt="linkedin" /></a>
        <a href="https://github.com/Quill0831/Quill0831"><img className="footerIcon" src={github} alt="github" /></a>
        <a href="https://www.cakeresume.com/alex-lu-08591a"><img className="footerIcon" src={cakeresume} alt="cakeresume" /></a>
      </footer>
    </div>
  );
}

export default Footer;
