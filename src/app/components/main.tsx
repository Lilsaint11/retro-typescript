"use client";
import TellStory from "./tellStory"
import { type } from "os";
import { IoMdMoon } from "react-icons/io";
import { useEffect, useState } from "react";
import Link from "next/link";
import FullStoryModal from "./fullStoryModal";
import { useTheme } from "../../../context/ThemeContext";
import { supabase } from "../database/supabase";

export default function Main () {
  const { theme, toggleTheme, storyModalOpen, toggleStoryModalOpen, fullStoryModalOpen, toggleFullStoryModalOpen } = useTheme()
   interface storyType  {story: string, twitter: string}

    const [stories,setStories] = useState<storyType[] | null>([
     
    ])
   
    const [storyData, setStoryData] = useState<storyType>({story: "", twitter: ""})

    function getStoryData(data:storyType){
        toggleFullStoryModalOpen()
        setStoryData(data)
    }

    useEffect(()=>{
      const fetchItems = async () => {
          const {data, error} = await supabase
          .from('stories')
          .select()

          if(error){
              setStories(null)
              console.log(error)
          }
          if(data){
            setStories(data)
          }
      }
      fetchItems();
  },[toggleStoryModalOpen])

    return (
      <div className={`dm flex flex-col items-center h-full w-full  px-5 pt-16 pb-10 gap-5 relative ${theme == "dark" ? "bg-black text-white":"bg-white text-black"}`}>
        {storyModalOpen && <TellStory />}
        {fullStoryModalOpen && <FullStoryModal storyData={storyData} />}
        <div className="w-full">
          <h1 className='text-[67px] max-[460px]:text-[57px] max-[400px]:text-[47px] max-[340px]:text-[37px] font-semibold leading-tight sm:text-center  sm:text-[80px] md:text-[100px]  lg:text-[150px]'>2023 RETRO</h1>
          <div className="sm:flex sm:justify-between sm:items-center">
            <p className="text-[14px] font-semibold max-sm:mb-5">Tell your 2023 story!</p>
            <div className="flex gap-5 max-[450px]:gap-2 items-center">
              <p className={`px-2 py-1 rounded-full border-[1.5px] border-black ${theme == "dark" ? "border-white":"border-black"} text-[12px] max-[400px]:text-[10px] max-[360px]:text-[8px] font-semibold cursor-pointer`} onClick={toggleStoryModalOpen}>Tell your story</p>

              <Link href="https://twitter.com/"><p className={`px-2 py-1 rounded-full border-[1.5px] border-black ${theme == "dark" ? "border-white":"border-black"} text-[12px] max-[400px]:text-[10px] max-[360px]:text-[8px] font-semibold cursor-pointer`}>Twitter</p></Link>

              <div className={`flex items-center gap-2 px-2 py-1 rounded-full border-[1.5px] max-[400px]:text-[10px] max-[360px]:text-[8px] border-black ${theme == "dark" ? "border-white":"border-black"} text-[12px] cursor-pointer`} onClick={toggleTheme}>
                <IoMdMoon className="text-[16px]"/>
                <p className="font-semibold">Dark mode</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-sm:flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {stories?.map(story =>(
            <div className="border border-[#A8A8A8] p-5 rounded-lg flex flex-col gap-2 cursor-pointer" onClick={()=>getStoryData(story)}>
               <p className="text-[12px] line-clamp-5">{story.story}</p>
               <p className="text-[14px] font-semibold">@{story.twitter}</p>
             </div>
          ))}
        </div>
      </div>
      //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
    )
}