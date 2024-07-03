import React, { useContext, useState } from 'react'
import { FaBars } from "react-icons/fa"
import { GoPlus } from "react-icons/go";
import { LuMessageSquare } from "react-icons/lu";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoIosTimer } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { Context } from '../Context/Context';

const Sidebar = () => {
    const [content,setContent] = useState(true);
    const {onSent,prevPrompt,setRecentPrompt,newChat} = useContext(Context)
    const loadPrompt = async(prompt) =>{
      setRecentPrompt(prompt)
      await onSent(prompt)
    }
  return (
    <React.Fragment>
    <div className=' min-h-[100vh]  hidden md:inline-flex flex-col bg-[#f0f4f9] p-4 text-nowrap gap-3'>
    <FaBars onClick={() =>setContent(prev=>!prev)}/>
   <div className='inline-flex p-2 bg-[#e5eaf1] cursor-pointer items-center rounded-full gap-2 mt-[30px]' onClick={() => {newChat()}}>
    <GoPlus />
   {content ? <p>New chat</p>:null}
    </div>
   {content ? <div className='inline-flex flex-col gap-4 mt-[40px]' >
    <p className='font-bold'>Recent</p>
    <div className='inline-flex flex-col gap-2 text-nowrap  ' >
    {prevPrompt.map((prompt,index)=>{
      return(
      <div  onClick={() =>loadPrompt(prompt)} key={index} className='inline-flex gap-2 items-center cursor-pointer bg-[#e5eaf1] rounded-full p-2 '>
      <LuMessageSquare />
      <p>{prompt.slice(0,15)}....</p>
      </div>)
    })}
    </div>
    </div> : null}
    <div className='inline-flex flex-col gap-2 absolute bottom-0'>
    <div className='inline-flex gap-3 items-center rounded-full hover:bg-[#e5eaf1] p-2'>
    <IoIosHelpCircleOutline  className='text-xl'/>
    {content?<p>Help</p>:null}
    </div>
    <div className='inline-flex gap-3 items-center rounded-full hover:bg-[#e5eaf1] p-2 '>
    <IoIosTimer  className='text-xl'/>
    {content?<p>Activity</p>:null}
    </div>
    <div className='inline-flex gap-3 items-center rounded-full hover:bg-[#e5eaf1] p-2'>
    <IoSettingsOutline   className='text-xl'/>
    {content?<p>Settings</p>:null}
    </div>
    </div>
    </div>
    </React.Fragment>
  )
}

export default Sidebar