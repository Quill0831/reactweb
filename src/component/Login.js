import React, { useRef, useState } from 'react'
import "../style/style.css"
import {signup , useAuth , signin , logout} from './firebase'




const Login = () => {

  const [loading , setLoading] = useState(false);
  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();



  const handleSignup =  async () =>{
    setLoading(true)
    try{
      await signup(emailRef.current.value , passwordRef.current.value);
    }catch(e){
      console.log(e)
      alert("此帳號已被使用過")
    }
    setLoading(false)
  }


  const handleLogin =  async () =>{
    setLoading(true)
    try{
      await signin(emailRef.current.value , passwordRef.current.value);
    }catch(e){
      alert("錯誤")
      console.log(e);
    }
    setLoading(false)
  }  

  const handleLogout =  async () =>{
    setLoading(true)
    try{
      await logout();
    }catch(e){
      alert("錯誤")
      console.log(e);
    }
    setLoading(false)
  }  
  return (
    <div className='loginAndSignUP'>

    
        <div className='loginDiv'>
        <p style = {{ fontSize: '30px' }}>登入</p>
      
           使用者名稱或電子郵件:
           <br />
           <input  type="text" ref={emailRef} className='loginInput'placeholder='Email'/>
           <br />
           密碼: 
           <br />
           <input type="password" ref={passwordRef} className='loginInput' placeholder='Password'/>
           <br />
            <button onClick={handleLogin} disabled={loading || currentUser !== null } >登入</button>
            <button onClick={handleLogout}  disabled={loading || currentUser == null} >登出</button>
            <button onClick={handleSignup} disabled={loading || currentUser !== null } >註冊</button>
            <p>登入帳號:{currentUser?.email}</p>
        </div>
        
    </div>
  )
}


export default Login