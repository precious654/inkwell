"use client"
import React from 'react'
import {MoveUp} from "lucide-react";

const ScrollToTop = () => {
    const scrollToTopOfScreen = () => {
        window.scrollTo({
            top: 0,        // Scroll to the top of the page
            behavior: 'smooth' // Smooth scrolling animation
        });
    }

    return (
        <div className="bg-[#FFFFFF] shadow-md rounded-full p-3 cursor-pointer" onClick={scrollToTopOfScreen}>
            <MoveUp size={16} className="text-red-400"/>
        </div>
    )
}
export default ScrollToTop
