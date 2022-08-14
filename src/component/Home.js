import React from 'react';
import '../style/style.css';
import homepage from '../img/homepage.jpg';

function Homepage() {
  return (
    <div className="homePage">
      <div>
        <img className="homePagePicture" src={homepage} alt="" />
        <p>地球孕育數不清的生命物種，讓世界變得很精采</p>
        <br />
        <p>如果你也喜歡動物，歡迎帶他們回家喔!</p>
      </div>

    </div>
  );
}

export default Homepage;
