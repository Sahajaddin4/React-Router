import React, { useState } from 'react';

function SignUp({getData}){
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        mobile:0,
        country:"",
        passport:false
    })

    function onChangeHandler(event){
         const {name,value,type,checked}=event.target;
       
         
         setFormData(prevDatas=>{
        return {
            ...prevDatas,
              [name]: type==="checkbox"?checked:value
        }
         });
      
         
    }


    return (
        <>
         <div className="signup-page mx-auto  w-[45rem] bg-white">
            <header className='text-center'>
                <h1 className='font-bold  text-3xl mb-5'>Create Account</h1>
            </header>
            <div className="form">
                <form>
                    {/* name */}
                <div className="name p-2 flex">
                    <label htmlFor="user-name" className='p-2'>Name:</label>
                    <input type="text" id='user-name' onChange={onChangeHandler} name="name" className='p-2 border rounded flex-grow' placeholder='enter your name' />
                </div>

                {/* user email */}
                <div className="email p-2 flex">
                    <label htmlFor="user-email" className='p-2'>Email:</label>
                    <input type="email" id='user-email' onChange={onChangeHandler} name="email" className='p-2 border rounded flex-grow' placeholder='enter your email' />
                </div>

                {/* user mobile no */}
                <div className="mobile p-2 flex">
                    <label htmlFor="user-mobile" className='p-2'>Mobile no:</label>
                    <input type="number" onChange={onChangeHandler} name="mobile" id='user-mobile' className='p-2 border rounded flex-grow' />
                </div>
                {/* Country */}
                <div className="country p-2 flex">
                    <label htmlFor="user-country" className='p-2'>Country:</label>
                    <select name="country" onChange={onChangeHandler} className='rounded-md border' id="user-country">
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Singapore">Singapore</option>
                    </select>
                </div>
                {/* Documents available */}
                <div className="documents p-2 flex">
                    <label htmlFor="user-passport" className='p-2'>Passport:</label>
                    <input type="checkbox" onChange={onChangeHandler} name="passport" id='user-passport' checked={formData.passport} className='p-2 border rounded flex-grow' />
                </div>

                <button onClick={(e)=>{
                    e.preventDefault();
                    getData(formData)
                }}>submit</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default SignUp;