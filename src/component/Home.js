import React from 'react'
import '../style/style.css'

const Homepage = () => {
  return (
    <div className='homePage'> 
        <div >
    <img className='homePagePicture' src={require("../img/homepage.jpg")} alt="" />
    <p>地球孕育數不清的生命物種，讓世界變得很精采</p>
    <br />
    <p>如果你也喜歡動物，歡迎帶他們回家喔!</p>
         </div>

</div>
  )
}

export default Homepage