import React, { useState } from 'react'

function Password() {
    const [userName,setUserName]=useState("");
    const [password,setpassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [usernameErr,setUsernameErr]=useState(false);
    const [passErr,setPassErr]=useState(false)
    const validateUserName=()=>{
        if(userName.length < 3 ){
            setUsernameErr(true)
    }
    else {
        setUsernameErr(false)
    }
    }
    const validatePassword=()=>{
        if(password.length < 6 ){
            setPassErr(true)
    }
    else {
        setPassErr(false)
    }
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        
      
       
     }
  return (
    <div className='flex items-center justify-center min-h-screen bg-slate-700'>
    <div className='flex flex-col items-center justify-center bg-white p-10 rounded-xl ' >
      <div>
        <h1 className='font-bold text-center m-3'>step 3</h1>
      </div>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div>
            <h1>UserName</h1>
          <input required  value={userName} onChange={(e)=>{
            setUserName(e.target.value);validateUserName()
          }} className="border-2"/>
           {usernameErr && <p style={{ color: 'red' }}>Username should be more than 3 characters</p>}
        </div>
        <div>
            <h1>Password</h1>
          <input   type="text"  required value={password} onChange={ (e)=>{
            setpassword(e.target.value); validatePassword();
          }} className="border-2"/>
          
        </div>
        {passErr && <p style={{ color: 'red' }}>Password should be more than 6 characters</p>}
        <div>
            <h1>Confirm Password</h1>
          <input   type="text"  required value={confirmPassword} onChange={ (e)=>{
            setConfirmPassword(e.target.value); validateEmail();
          }} className="border-2"/>
          
        </div>
       {
        confirmPassword.length > 0 ||  password===confirmPassword ? (
            ""
        ):(
            <p style={{ color: 'red' }}>Confirm password not same as password</p>
        )
       }
        <button  className="bg-blue-500 text-white p-2 rounded-2xl w-1/2 mx-12">
            Next
        </button>
      </form>
    </div>
  </div>
  )
}

export default Password