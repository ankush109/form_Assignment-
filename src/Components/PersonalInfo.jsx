import { useState } from "react"
import { useNavigate } from "react-router";


function PersonalInfo() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [isValid, setIsValid] = useState(true);
    const navigate=useNavigate();
    const [nameErr,setNameErr]=useState(false)
    const [dob,setDob]=useState("");

    const validateDob=()=>{
        if(dob){
        const userDateTime=new Date(dob);
        const currentTime=new Date();
        return userDateTime<=currentTime
        }
    }
    const validateEmail = () => {

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
        setIsValid(emailPattern.test(email));
      };
    const validateName=()=>{
        if(name.length < 3 ){
            setNameErr(true)
    }
    else {
        setNameErr(false)
    }
    }
 const handleSubmit= (e)=>{
    e.preventDefault();

    if(dob!="" && name!="" && email!=""){
        navigate("/1")
    }
  
 }
  return (
    <div className='flex items-center justify-center min-h-screen bg-slate-700'>
    <div className='flex flex-col items-center justify-center bg-white p-10 rounded-xl ' >
      <div>
        <h1 className='font-bold text-center m-3'>step 1</h1>
      </div>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div>
            <h1>Name</h1>
          <input required  value={name} onChange={(e)=>{
            setName(e.target.value);validateName()
          }} className="border-2"/>
           {nameErr && <p style={{ color: 'red' }}>Name should be more than 3 characters</p>}
        </div>
        <div>
            <h1>Email</h1>
          <input   type="email"  required value={email} onChange={ (e)=>{
            setEmail(e.target.value); validateEmail();
          }} className="border-2"/>
           {!isValid && <p style={{ color: 'red' }}>Invalid email format. Please enter a valid email address.</p>}
        </div>
        <div>
            <h1>DOB</h1>
          <input     type='date'
              value={dob}
              required
              onChange={(e) => {
                setDob(e.target.value);
                validateDob();
              }}
              className="border-2"/>
              { dob && !validateDob() ? (
                <p style={{ color: 'red' }}>Date of Birth cannot be a future Date</p>
              ) : ""}
        </div>
        <button disabled={!name && !email && !dob} className="bg-blue-500 text-white p-2 rounded-2xl w-1/2 mx-12">
            Next
        </button>
      </form>
    </div>
  </div>
  )
}

export default PersonalInfo