import React, { useState } from 'react';
import '../style/style.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import igPicture from '../img/instagram.png';
import ytPicture from '../img/youtube.png';
import fbPicture from '../img/facebook.png';

const Button = styled.button`
  background: ${(props) => (props.primary ? '#white' : '#ca9b52')};
  color: ${(props) => (props.primary ? '#ca9b52' : 'white')};
  font-size: 1em;
  position: relative;
  padding: 0.25em 1em;
  border: 2px solid #ca9b52;
  border-radius: 3px;
  margin-bottom: 10px;
  @media screen and (min-width: 850px) {
    display:none;
}
`;
const Ul = styled.div`
background-color: rgba(0 ,0 ,0 ,.92);
width: 100%;
height: 100vh;
position: absolute;
text-align:center;
transform: ${(props) => (props.primary ? 'scaleY(1)' : 'scaleY(0)')};
transition: transform .3s ease-in-out , opacity .3s ease-in-out .3s;
transform-origin: 50% 0;
`;

function Nav() {
  const [show, setShow] = useState(false);

  return (
    <div>

      <nav className="navBar">

        <a href="https://instagram.com"><img src={igPicture} alt="instagram" className="connectIcon" /></a>
        <a href="https://youtube.com"><img src={ytPicture} alt="youtube" className="connectIcon" /></a>
        <a href="https://facebook.com"><img src={fbPicture} alt="facebook" className="connectIcon" /></a>

      </nav>

      <div className="mabileButtonDiv">
        <Button primary={show} onClick={() => setShow(!show)}>menu</Button>
        <hr />
      </div>

      <ul className="mainTheme">

        <Link to="/Home">
          <li className="themeButton">首頁 </li>
          {' '}
        </Link>
        <Link to="/Main">
          <li className="themeButton"> 商品 </li>
          {' '}
        </Link>
        <Link to="/Cart">
          {' '}
          <li className="themeButton">購物車</li>
        </Link>
        <Link to="/Login">
          {' '}
          <li className="themeButton">註冊/登入</li>
        </Link>
        <Link to="/Faq"><li className="themeButton">FAQ</li></Link>

      </ul>
      <Ul primary={show}>

        <Link to="/Home" onClick={() => setShow(!show)}>
          <li className="themeButton">首頁 </li>
          {' '}
        </Link>
        <Link to="/Main" onClick={() => setShow(!show)}>
          <li className="themeButton"> 商品 </li>
          {' '}
        </Link>
        <Link to="/Cart" onClick={() => setShow(!show)}>
          {' '}
          <li className="themeButton">購物車</li>
        </Link>
        <Link to="/Login" onClick={() => setShow(!show)}>
          {' '}
          <li className="themeButton">註冊/登入</li>
        </Link>
        <Link to="/Faq" onClick={() => setShow(!show)}><li className="themeButton">FAQ</li></Link>

      </Ul>

    </div>
  );
}

export default Nav;
