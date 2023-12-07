import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useTheme } from "../../../context/ThemeContext";
import { supabase } from "../database/supabase";

export default function TellStory () {
    const { theme,toggleStoryModalOpen} = useTheme();
    const [formData, setFormData] = useState({
        story: "",
        twitter:"",
    });
    const {story, twitter} = formData;
    function onChange(e: React.ChangeEvent<HTMLTextAreaElement>|React.ChangeEvent<HTMLInputElement>){
        setFormData((prevState) => ({
            ...prevState,[e.target.id]: e.target.value
        }))
    }
    async function onSubmit(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault()
        const {data, error} = await supabase
        .from('stories')
        .insert([{story:story,twitter:twitter}])
        .select()

        if (error){
            console.log(error)
        }
        if(data){
            toggleStoryModalOpen()
        }
        console.log("data")
    }
    return ( 
        <div className={`absolute top-0 h-screen  ${theme == "dark" ? "bg-black":"bg-white"} w-full flex justify-center items-center`}>
            <div className=" px-5 flex flex-col gap-5 w-[500px]">
                <h3 className="sm:text-center">Tell your 2023 story</h3>
                <div className="border border-[#A8A8A8] rounded-lg p-3">
                    <textarea name="" id="story" value={story} onChange={onChange} className={`h-40 rounded-lg pt-3 w-full  outline-none ${theme == "dark" ? "bg-black":"bg-white"}`} placeholder="say something"></textarea>

                    <div className="flex justify-between items-center">
                        <button className={`${theme == "dark" ? "bg-white text-black":"bg-black text-white"} rounded-full cursor-pointer h-7 px-2 sm:px-4 text-[14px]`} onClick={onSubmit}>Say it</button>
                        <div>
                            <div className="flex items-center text-[14px] gap-1 border-b border-black pb-2">
                                <h6>@</h6>
                                <input type="text" id="twitter" value={twitter} onChange={onChange} placeholder="yourname" className={`outline-none ${theme == "dark" ? "bg-black":"bg-white"}`}/>
                            </div>
                            <div className="flex items-center text-[14px] gap-1  pt-2">
                                <input type="checkbox" name="" id="" className="cursor-pointer"/>
                                <h6 className="text-[14px]">This is my X username</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center sm:justify-center text-[14px] gap-1 cursor-pointer" onClick={toggleStoryModalOpen}>
                    <p>Close</p>
                    <IoIosCloseCircleOutline className="text-[16px]"/>
                </div>
            </div>
        </div>
     );
}
 
