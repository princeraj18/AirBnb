import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { authDataContext } from '../context/AuthContext';
import axios from 'axios';

const SignUp = () => {



    let navigate =useNavigate()
    let {serverurl} = useContext(authDataContext)
    let [name,setname]=useState("")
    let [email,setemail]=useState("")
    let [password,setpassword]=useState("")

    const handleSignUp = async(e)=>{
        try{
            e.preventDefault();
            let result= await axios.post(serverurl + "/api/auth/signup" , {
                name,
                email,
                password
            },{withCredentials:true});
            console.log(result)
        }
        catch(error){
                console.log(error);
                
        }
    }
  return (
    <div className='h-screen w-full flex  items-center justify-center'>
         <div className='h-[50px] w-[50px] bg-[red] rounded-full cursor-pointer flex justify-center items-center absolute top-[10%] left-[20px]' onClick={()=>navigate("/")}>
                <FaLongArrowAltLeft  className='h-[25px] w-[25px] text-white'/>
        
                </div>
        <form action="" className='max-w-[900px] w-[90%] h-[600px] flex items-center justify-center  flex-col md:items-start gap-[10px]' onSubmit={handleSignUp}>
            <h1 className='text-[30px] text-[black]'>Welcome to AirBnb </h1>
            <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[30px]'>
        <label htmlFor="name" className='text-[20px]'> Username</label>
            <input type="text" name="" id="name" className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg px-[20px] text-[18px]' required onChange={(e)=>setname(e.target.value)}  value={name}/>
            </div>
            

            <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] '>
                   <label htmlFor="email" className='text-[20px]'> Email</label>
            <input type="text" name="" id="email"  className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg px-[20px] text-[18px]' required onChange={(e)=>setemail(e.target.value)}  value={email}/>

            </div>

           <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] '>
                 <label htmlFor="password" className='text-[20px]'> Password</label>
            <input type="password" name="" id="password"  className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg px-[20px] text-[18px]' required onChange={(e)=>setpassword(e.target.value)}  value={password}/>

           </div>
             
                <button className='px-[50px] py-[10px] bg-[red] text-white text-[18px] md:px-[100px] rounded-lg mt-5'>SignUp</button>

            <p className='text-[19px]'>
                Already Have an Account ? <span className='text-[19px] text-[red] cursor-pointer' onClick={()=>navigate("/login")}>Login</span>
            </p>

        </form>
          
        
    </div>
  )
}

export default SignUp