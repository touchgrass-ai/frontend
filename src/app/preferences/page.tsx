"use client"

import { useRouter } from "next/navigation"
import PreferenceButton from "./PreferenceButton"

export default function Page(){
    const router = useRouter();

    const handleNextClick = () => {
        router.push("/dashboard");
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-6">
            <h1 className="text-red-500 text-3xl font-bold text-center mb-2"> Preferences </h1>
            <p className= "text-red-300 text-center mb-6"> Select any that apply </p>

            <div className= "grid grid-cols-2 gap-4 mb-6 w-full max-w-md">
                <PreferenceButton label = "Food"/>
                <PreferenceButton label = "Exploring"/>
                <PreferenceButton label = "Movies"/>
                <PreferenceButton label = "Sports"/>
            </div>

            <div className="flex justify-between w-full max-w-md px-6">
                <button className="text-black font-medium hover:text-gray-700"
                        onClick={handleNextClick}>
                    Skip
                </button>
                <button className="bg-red-500 text-white px-4 py-3 rounded-full shadow-md hover:bg-red-600"
                        onClick={handleNextClick}>
                    <span>
                        <img src="/arrow-forward.svg" alt="arrow forward" className="w-6 h-g"></img>
                    </span>
                </button>
            </div>
        </div>
    )
}