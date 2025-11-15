import React, { createContext, useContext, useState } from 'react'
import Logo from '../assets/Logo.png'
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdWhatshot } from "react-icons/md";
import { MdOutlineVilla } from "react-icons/md";
import { MdPool } from "react-icons/md";
import { MdBedroomChild } from "react-icons/md";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { GiHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { Navigate, useNavigate } from 'react-router-dom'
import { authDataContext } from '../context/AuthContext';
import axios from 'axios';
import { userDataContext } from '../context/userContext';

const Nav = () => {
  let [showpopup,setshowpopup]=useState(false);
    let {userData,setUserData}=createContext(userDataContext)
  let navigate = useNavigate();
  let {serverurl} = useContext(authDataContext);

  const handleLogout = async ()=>{
    try {
      let result =  await axios.post(serverurl + "/api/auth/logout" ,{withCredentials:true})
      setUserData(null)
      console.log(result);
      
      
    } catch (error) {
      console.log(error);
      
      
    }
  }

  return (
    <div>
        <div className='w-[100vw] min-h-[80px] border-b-[1px] border-[#dcdcdc] px-[40px] flex items-center justify-between'>
           <div>
            <img src={Logo} alt="" className='w-[130px]' />
           </div>
           <div className='w-[35%] relative md:block hidden '>
            <input type="text" placeholder='Any Where | Any Location | Any City ' className='w-[100%] px-[30px] py-[10px] border-[2px] border-[#bdbaba] outline-none overflow-auto rounded-[30px] text-[17px] ' />
            <button className='absolute top-[3px] p-[10px] rounded-full right-2 bg-[red] text-white text-xl font-bold'>
                <FiSearch className='w-[20px] h-[20px] ' />
            </button>
           </div>
           <div className='flex items-center justify-center gap-[10px] relative '>
            <span className='text-[18px] cursor-pointer rounded-[50px] hover:bg-[#ded9d9] px-[8px] py-[5px] md:block hidden '>List your home</span>
            <button className='flex px-[20px] py-[10px] items-center  justify-center gap-[5px] border-[1px]
             border-[#8d8c8c] rounded-[50px] hover:shadow-lg' onClick={()=>{
              setshowpopup(prev=>!prev)
            }}>
                <span><GiHamburgerMenu className='w-[20px] h-[20px]' /> </span>
             { userData==null && <span> <CgProfile className='w-[23px] h-[23px]' />  </span>}
              { userData!=null && <span className='w-[30px] h-[30px] bg-[#080808] text-white rounded-full flex items-center justify-center'>
                {userData?.name.slice(0,1)}
              </span>
       }     </button>
           {showpopup && <div className='w-[220px] h-[250px] absolute  bg-slate-50 z-1   shadow-lg top-[110%] md:right-[10%]  text-[17px] flex items-start justify-around flex-col py-[10px] rounded-2xl font-semibold '>
    <ul className='w-full'>    <li className='w-[100%] px-[15px] py-[10px] cursor-pointer hover:bg-[#dadadada]' onClick={()=>navigate("/login")}>Login</li>
        <li className='w-[100%] px-[15px] py-[10px] cursor-pointer hover:bg-[#dadadada]' onClick={handleLogout}>Logout</li>
        <div className='w-[100%] h-[1px] bg-[#c1c0c0] '> </div>
        <li className='w-[100%] px-[15px] py-[10px] cursor-pointer hover:bg-[#dadadada]'>List your Home</li>
        <li className='w-[100%] px-[15px] py-[10px] cursor-pointer hover:bg-[#dadadada]'>My Listing </li>
        <li className='w-[100%] px-[15px] py-[10px] cursor-pointer hover:bg-[#dadadada]'>Check Booking</li>
        </ul>
            </div>}
           </div>

        </div>
        <div className='w-[100%] relative md:hidden block mt-3'>
            <input type="text" placeholder='Any Where | Any Location | Any City ' className='w-[100%] px-[30px] py-[10px] border-[2px] border-[#bdbaba] outline-none overflow-auto rounded-[30px] text-[17px] ' />
            <button className='absolute top-[3px] p-[10px] rounded-full right-2 bg-[red] text-white text-xl font-bold'>
                <FiSearch className='w-[20px] h-[20px] ' />
            </button>
           </div>

        <div className="h-[85px] w-full bg-white flex items-center md:justify-center md:mt-1 mt-5 justify-start gap-8 cursor-pointer overflow-auto">


          <div className='flex items-center justify-center flex-col hover:border-b-[2px] border-[#a6a5a5] text-[13px]'>
            <MdWhatshot className='w-[30px] h-[30px] text-black' />
            <h3 className='font-semibold'>Trending</h3>
          </div>
          <div className='flex items-center justify-center flex-col hover:border-b-[2px] border-[#a6a5a5] text-[13px]'>
            <MdOutlineVilla className='w-[30px] h-[30px] text-black' /> 
            <h3 className='font-semibold'>Villa</h3>
          </div>
          <div className='flex items-center justify-center flex-col hover:border-b-[2px] border-[#a6a5a5] text-[13px]'>
           <MdPool className='w-[30px] h-[30px] text-black' />

            <h3 className='font-semibold'>Pool House</h3>
          </div>
          <div className='flex items-center justify-center flex-col hover:border-b-[2px] border-[#a6a5a5] text-[13px]'>
        <MdBedroomChild  className='w-[30px] h-[30px] text-black'/>
            <h3 className='font-semibold'>Rooms</h3>
          </div>
          <div className='flex items-center justify-center flex-col hover:border-b-[2px] border-[#a6a5a5] text-[13px] text-nowrap'>
            <PiBuildingApartmentFill className='w-[30px] h-[30px] text-black' />
            <h3 className='font-semibold'>Flat</h3>
          </div>
           <div className='flex items-center justify-center flex-col hover:border-b-[2px] border-[#a6a5a5] text-[13px] text-nowrap'>
              <GiHouse className='w-[30px] h-[30px] text-black' />
            <h3 className='font-semibold'>Farm House</h3>
          </div>
          <div className='flex items-center justify-center flex-col hover:border-b-[2px] border-[#a6a5a5] text-[13px] text-nowrap'>
            <MdBedroomParent className='w-[30px] h-[30px] text-black' />

            <h3 className='font-semibold'>PG</h3>
          </div>
          <div className='flex items-center justify-center flex-col hover:border-b-[2px] border-[#a6a5a5] text-[13px]'>
            <GiWoodCabin className='w-[30px] h-[30px] text-black' />

            <h3 className='font-semibold'>Cabins</h3>
          </div>
          <div className='flex items-center justify-center flex-col hover:border-b-[2px] border-[#a6a5a5] text-[13px]'>
            <SiHomeassistantcommunitystore className='w-[30px] h-[30px] text-black' />

            <h3 className='font-semibold'>Shops</h3>
          </div>
        </div>



    </div>
  )
}

export default Nav