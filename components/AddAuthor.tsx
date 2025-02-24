"use client"

import React from 'react'
import addAuthor from "@/actions/addAuthor";

const AddAuthor = () => {

    const clientAction = async (formData: FormData) => {
        const {data, error} = await addAuthor(formData);
        if(data) {
            console.log(data)
        } else {
            console.log(error)
        }
    }

    return (
        <main className="w-full flex justify-center">
            <form className="flex flex-col gap-5 w-1/2 mt-10" action={clientAction}>
                <input type="text" name="name" placeholder="Name" required={true} className="w-full p-3 rounded-lg"/>
                <textarea name="bio" placeholder="Your Bio" rows={50} required={true} className="p-3 rounded-lg"></textarea>
                <button className="py-3 bg-red-400 text-[#FFFFFF] rounded-lg">Create Author</button>
            </form>
        </main>
    )
}
export default AddAuthor
