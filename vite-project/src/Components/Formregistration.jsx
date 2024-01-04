import  { useState } from 'react';
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import Lottie from "lottie-react";
import registrationAnimation from "../../public/Animation - 1704175339284.json";

const Formregistration = () => {
    

    const [fullname,setFullName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [rePassword,setRePassword]=useState('');

    const [showPass, setShowPass]=useState(true);
    const [showRePassword, setShowRePassword]=useState(true)
   

    const [fullnameError,setFullNameError]=useState('');
    const [emailError,setEmailError]=useState('');
    const [passwordError,setPasswordError]=useState('');
    const [rePasswordError,setRePasswordError]=useState('');


    const handleFullName=((e)=>{
        setFullName(e.target.value)
        setFullNameError("")
    })
   const handlEmail=((e)=>{
    setEmail(e.target.value)
    setEmailError("")
    
   })
   const handlePassword=((e)=>{
    setPassword(e.target.value)
    setPasswordError("")
   })
   const handleRePassword=((e)=>{
    setRePassword(e.target.value)
    setRePasswordError("")
   })
   const handleSubmit=(e)=>{
    e.preventDefault()
    
    if(fullname==""){
        setFullNameError("Error")
    }else if(email==""){
        setEmailError("Error")
    }else if(password==""){
        setPasswordError("Error")
    }
    else if(rePassword==""){
        setRePasswordError("Error")
       
    }
   }
  
    return (
        <div id='registration' >
           <div className='w-[35%]'>
           <h2>Registration form</h2>
           <form action="" onSubmit={handleSubmit}>
            <input onChange={handleFullName} type="text" placeholder='Enter your Fullname' />
            {
                fullnameError&&
               <p className='bg-red-600 py-2 px3 mb-3 text-white'>{fullnameError}</p>
            }
           
            <input onChange={handlEmail} type="email" placeholder='Enter your email' />
            {
                emailError&&
               <p className='bg-red-600 py-2 px3 mb-3 text-white'>{emailError}</p>
            }
            <div className='relative'>
            <input  onChange={handlePassword} type={showPass?"password":"text"}  placeholder='Enter your Password' />
           
            {
                showPass?
                       <FaEyeSlash onClick={()=>{setShowPass(!showPass)}}  className='absolute right-[11px] top-[11px] cursor-pointer ' />
                   :
                   <FaRegEye onClick={()=>{setShowPass(!showPass)}} className='absolute right-[11px] top-[11px] ' />

            }

            </div > 
            {
                passwordError&&
               <p className='bg-red-600 py-2 px3 mb-3 text-white'>{passwordError}</p>
            }
            <div className='relative'>
            <input onChange={handleRePassword} type={showRePassword? "password":"text"} placeholder=' RePassword' />
            {
                showRePassword ?
                <FaEyeSlash onClick={()=>{setShowRePassword(!showRePassword)}} className='absolute right-[11px] top-[11px] cursor-pointer ' />
                :
                <FaRegEye  onClick={()=>{setShowRePassword(!showRePassword)}} className='absolute right-[11px] top-[11px] cursor-pointer ' />

            }
            </div>
           {
             
                rePasswordError&&
               <p className='bg-red-600 py-2 px3 mb-3 text-white'>{rePasswordError}</p>
            
           }
            <button  type='submit' className='py-3 w-[50%] ml-[50%] translate-x-[-50%] block  text-center bg-[#176B87] rounded-lg mb-10'>Submit</button>
            
           </form>
           </div>
           <div className='w-[35%]'>
           <Lottie animationData={registrationAnimation}  />;
           </div>
        </div>
    );
};

export default Formregistration;