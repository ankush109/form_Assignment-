import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function Address() {
    const navigate=useNavigate();
    const [street,setStreet]=useState("");
    const [city,setCity]=useState("");
    const [selectedOption, setSelectedOption] = useState('');
    const [code,setCode]=useState("")
    const [adderr,setaddErr]=useState(false);
    const [cityerr,setCityErr]=useState(false);
    const checkCity=()=>{
        if(city.length < 3){
            setCityErr(true);
        }
        else{
            setCityErr(false)
        }
    }
    const checkAddr=()=>{
        if(street.length < 5){
            setaddErr(true)
        }
        else {
            setaddErr(false)
        }
    }
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
      }
      const states={
        "states": [
            "Andhra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chhattisgarh",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Madhya Pradesh",
            "Maharashtra",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Odisha",
            "Punjab",
            "Rajasthan",
            "Sikkim",
            "Tamil Nadu",
            "Telangana",
            "Tripura",
            "Uttar Pradesh",
            "Uttarakhand",
            "West Bengal"
          ],
      }
    const handleSubmit= (e)=>{
        e.preventDefault();
        navigate("/2")
      
       
     }
  return (
    <div className='flex items-center justify-center min-h-screen bg-slate-700'>
    <div className='flex flex-col items-center justify-center bg-white p-10 rounded-xl ' >
      <div>
        <h1 className='font-bold text-center m-3'>step 2</h1>
      </div>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div>
            <h1>Street</h1>
          <input required  value={street} onChange={(e)=>{
            setStreet(e.target.value);
            checkAddr();
          }} className="border-2"/>
          {adderr? (
            <p style={{ color: 'red' }}>Address Should be more than 5 characters</p>
          ):""}
        </div>
        <div>
            <h1>city</h1>
          <input required type="text"  value={city} onChange={ (e)=>{
            setCity(e.target.value);
            checkCity();
          }} className="border-2"/>
     {cityerr? (
            <p style={{ color: 'red' }}>City Should be more than 3 characters</p>
          ):""}
        </div>
        <div>
            <h1>state</h1>
            <select required value={selectedOption} onChange={handleSelectChange}>
          <option value="">Select</option>
          {
            states.states.map((x)=>(
                <option>{x}</option>
            ))
          }
        </select>
        </div>
        <div>
            <h1>Zip Code</h1>
          <input type='number' value={code} onChange={(e)=>{
            setCode(e.target.value)
          }} className="border-2"/>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-2xl w-1/2 mx-12">
            Next
        </button>
      </form>
    </div>
  </div>
  )
}

export default Address