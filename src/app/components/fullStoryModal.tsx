"use client";
import { IoMdMoon } from "react-icons/io";
import Link from "next/link";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { type } from "os";
import { useTheme } from "../../../context/ThemeContext";

type storyType ={storyData:{story: string, twitter: string}}


const FullStoryModal= ({storyData}: storyType) => {
    const { theme,toggleStoryModalOpen, toggleFullStoryModalOpen} = useTheme();
    console.log(storyData)
    return ( 
        <div className={`absolute top-0 h-screen  ${theme == "dark" ? "bg-black":"bg-white"} w-full px-5 flex flex-col justify-center items-center gap-5`}>
            <h1 className='text-[67px] sm:text-[80px] md:text-[100px]] max-[460px]:text-[57px] max-[400px]:text-[47px] max-[340px]:text-[37px] font-semibold leading-tight'>2023 RETRO</h1>
            <div className="border border-[#A8A8A8] p-5 rounded-lg flex flex-col gap-2 max-w-[500px]">
                <p className="text-[12px]">{storyData.story}</p>
               <p className="text-[14px] font-semibold">@{storyData.twitter}</p>
            </div>
            <div className="flex gap-5 items-center w-full justify-center">
                <p className="px-2 py-1 rounded-full border-[1.5px] border-black text-[12px] max-[400px]:text-[10px] max-[360px]:text-[8px] font-semibold cursor-pointer" onClick={toggleStoryModalOpen}>Tell your story</p>

                <Link href="https://twitter.com/"><p className="px-2 py-1 rounded-full border-[1.5px] border-black text-[12px] max-[400px]:text-[10px] max-[360px]:text-[8px] font-semibold cursor-pointer">Twitter</p></Link>

                <div className="flex items-center gap-2 px-2 py-1 rounded-full border-[1.5px] max-[400px]:text-[10px] max-[360px]:text-[8px] border-black text-[12px] cursor-pointer">
                <IoMdMoon className="text-[16px]"/>
                <p className="font-semibold">Dark mode</p>
                </div>
          </div>
          <div className="flex w-full justify-center items-center text-[14px] gap-1 cursor-pointer" onClick={toggleFullStoryModalOpen}>
            <p>Close</p>
            <IoIosCloseCircleOutline className="text-[16px]"/>
          </div>
        </div>
    )
}

export default FullStoryModal;

