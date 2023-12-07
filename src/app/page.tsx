"use client"
import { useTheme } from "../../context/ThemeContext";
import Main from "./components/main";

export default function Home() {
  const { storyModalOpen, fullStoryModalOpen} = useTheme()
  return (
    <div className={`${storyModalOpen || fullStoryModalOpen && "overflow-hidden h-screen"}`}> 
    <Main />
    </div>
  )
}
