import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { IoLibraryOutline } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { MdOutlineWatchLater } from "react-icons/md";

export default function Sidebar() {
    const mainLinks = [
        {
            icon:<MdHomeFilled className='text-xl'/>,
            name:'Home'
        },
        {
            icon:<SiYoutubeshorts className='text-xl'/>,
            name:"Shorts"
        },
        {
            icon:<MdSubscriptions className='text-xl'/>,
            name:"Subscriptions"
        }
    ];


    const otherLinks =[
        {
            icon:<IoLibraryOutline className='text-xl'/>,
            name:"Library"
        },
        {
            icon:<FaHistory className='text-xl'/>,
            name:"History"
        },
        {
            icon:<SlLike className='text-xl'/>,
            name:"Liked Video"
        },
        {
            icon:<MdOutlineWatchLater className='text-xl'/>,
            name:"Watch Later"
        }
    ]

  return (
    <div className='w-2/12 bg-[#212121] pr-5 p-2 overflow-auto pb-8 h-screen'>
      <ul className='flex flex-col border-b-2 border-gray-700'>
        {mainLinks.map(({icon,name})=>{
            return(
                <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 ${name === "Home" ? "bg-slate-600" : " "} rounded-xl`}>
                    <a href='#' className='flex items-center gap-5'>
                        {icon}
                        <span className='text-sm tracking-wider'>{name}</span>
                    </a>
                </li>
            )
        })}
      </ul>
      <ul className='flex flex-col border-b-1'>
        {otherLinks.map(({icon,name})=>{
            return(
                <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 ${name === "Home" ? "bg-slate-600" : " "} rounded-xl`}>
                    <a href='#' className='flex items-center gap-5'>
                        {icon}
                        <span className='text-sm tracking-wider'>{name}</span>
                    </a>
                </li>
            )
        })}
      </ul>
    </div>
  )
}
