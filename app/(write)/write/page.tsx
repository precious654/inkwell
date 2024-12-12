import React from 'react'
import SelectComponent from "@/app/(components)/Select";

const Write = () => {
    return (
        <div className="py-3">
            <form action="" method="POST" className="flex flex-col gap-3">
                <input type="text" placeholder="Write your title..." name="title" className="outline-none p-4 bg-gray-200 rounded-lg font-semibold"/>
                <input type="text" placeholder="Write a short description..." name="description" className="outline-none p-4 bg-gray-200 rounded-lg" />
                <SelectComponent />
            </form>
        </div>
    )
}
export default Write
