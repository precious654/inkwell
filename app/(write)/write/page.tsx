"use client"

import React from 'react'
import searchCategory from "@/actions/searchCategory";
import addCategory from "@/actions/addCategory";

interface Category{
    name: string,
    id: string,
    createdAt: Date,
    updatedAt: Date
}

const Page = () => {
    const[category, setCategory] = React.useState("");
    const[categories, setCategories] = React.useState<Category[]>([]);

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value);
        const {data, error } = await searchCategory(category);
        if(data) {
            console.log(data)
            setCategories(data);
        } else {
            console.log(error)
        }

    }

    const handleClick = async () => {
        const { data, error } = await addCategory(category);
        if(data) {
            console.log(data)
        } else {
            console.log(error)
        }
    }

    return (
        <main>
            <form>
                <input type="text" name="title" placeholder="Your Article Title" required className="p-3 rounded-lg border-2 border-gray-200 outline-0" />
                <textarea name="description" placeholder="A short description of your article" rows={10} required className="p-3 rounded-lg border-2 border-gray-200 outline-0"></textarea>
                <div>
                    <input type="file" id="image" name="imageUrl" className="hidden" accept="image/*" />
                    <label htmlFor="image" className="font-medium cursor-pointer">Add image</label>
                </div>
                <input type="text" name="category" placeholder="Your Article Category" required className="p-3 rounded-lg border-2 border-gray-200 outline-0" onChange={handleChange} />
                { categories.length === 0 ? <p>No categories found</p> : categories.map(category => (<p key={category.id}>{category.name}</p>))}
                { categories.length === 0 && <button className="bg-red-400 rounded-lg p-3 text-[#FFFFFF]" onClick={handleClick}>Add Category</button>}
            </form>
        </main>
    )
}
export default Page
