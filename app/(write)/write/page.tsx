import React from 'react'
import SelectComponent from "@/app/(components)/Select";
import TipTap from "@/app/(components)/TipTap";

const Write = () => {
    return (
        <div className="py-5">
            <form action="" method="POST" className="flex items-center gap-3">
                <input type="text" placeholder="Write your title..." name="title" className="outline-none p-3 bg-gray-200 rounded-lg font-semibold w-full"/>
                <input type="text" placeholder="Write a short description..." name="description" className="outline-none p-3 bg-gray-200 rounded-lg w-full" />
                <SelectComponent />
            </form>
            <TipTap />
        </div>
    )
}
export default Write
