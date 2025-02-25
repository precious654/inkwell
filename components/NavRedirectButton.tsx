"use client"

import React from 'react'
import {SquarePen} from "lucide-react";
import checkUser from "@/actions/checkAuthor";

const NavRedirectButton = () => {
    return (
        <button className="flex items-center gap-2" onClick={checkUser}>
            <SquarePen size={16}/>
            Write
        </button>
    )
}
export default NavRedirectButton
