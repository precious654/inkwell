"use client"

import React from 'react'
import addAuthor from "@/actions/addAuthor";
import {redirect} from "next/navigation";

const AddAuthor = () => {

    const clientAction = async (formData: FormData) => {
        const {data, error} = await addAuthor(formData);
        if(data) {
            console.log(data)
            redirect("/write")
        } else {
            console.log(error)
        }
    }

    return (
        <main className="w-full flex flex-col gap-4 justify-center items-center mt-10">
            <p className="text-2xl font-semibold md:w-1/2 w-full">Create Author Profile</p>
            <form className="flex flex-col gap-5 md:w-1/2 w-full" action={clientAction}>
                <input type="text" name="name" placeholder="Name" required={true} className="w-full p-3 rounded-lg border-2 border-[#7b7a7b] shadow shadow-[#010100]"/>
                <textarea name="bio" placeholder="Your Bio" rows={10} required={true} className="p-3 rounded-lg border-2 border-[#7b7a7b] shadow shadow-[#010100]"></textarea>
                <button className="py-3 bg-red-400 text-[#FFFFFF] rounded-lg">Create Author</button>
            </form>
        </main>
    )
}
export default AddAuthor
