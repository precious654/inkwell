"use client";

import React from 'react'
import data from "@/data/data.json";
import Image from "next/image";
import image from "@/public/assets/john-wick-4-paris-poster.jpg";
import Link from "next/link";
import {FaHeart} from "react-icons/fa";
import {Eye} from "lucide-react";

const Tabs = ({about}: {about: string}) => {
    const[tabView, setTabView] = React.useState("articles");
    const likedData = data.filter( (item: BlogData) => item.id < 4);

    const toggleTabView = (event: React.MouseEvent<HTMLParagraphElement>) => {
        setTabView(event.currentTarget.innerHTML.toLowerCase());
    }

    return (
        <div className="mt-10">
            <div className="w-full border-b border-gray-300 flex items-center gap-3">
                <p className={`hover:border-b-2 pb-2 border-[#333333] cursor-pointer ${tabView === "articles" ? "border-b-2" : ""}`} onClick={toggleTabView}>Articles</p>
                <p className={`hover:border-b-2 pb-2 border-[#333333] cursor-pointer ${tabView === "likes" ? "border-b-2" : ""}`} onClick={toggleTabView}>Likes</p>
                <p className={`hover:border-b-2 pb-2 border-[#333333] cursor-pointer ${tabView === "about" ? "border-b-2" : ""}`} onClick={toggleTabView}>About</p>
            </div>

            <div className="mt-7">
                {
                    tabView === "articles" ? (
                        <div className="grid grid-cols-4 gap-7">
                            {
                                data.map((item: BlogData) => {
                                    return (
                                        <div key={item.id}>
                                            <Link href={`/article/${item.id}`}>
                                                <Image src={image} alt={item.title} width={290} height={150}
                                                       className="rounded-lg"/>
                                            </Link>
                                            <div className="flex flex-col gap-1 text-sm mt-1">
                                                <Link href={`/article/${item.id}`}
                                                      className="font-semibold">{item.title}</Link>
                                                <div className="flex justify-between items-center">
                                                    <p className="capitalize text-red-500">{item.category}</p>
                                                    <div className="flex items-center gap-1">
                                                        <div
                                                            className="flex items-center gap-1 px-1.5 py-0.5 text-xs">
                                                            <FaHeart />
                                                            <p>{item.likes}</p>
                                                        </div>
                                                        <div
                                                            className="flex items-center gap-1 px-1.5 py-0.5 text-xs">
                                                            <Eye size={17}/>
                                                            <p>{item.views}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : tabView === "likes" ? (
                        <div className="grid grid-cols-4 gap-7">
                            {
                                likedData.map((item) => {
                                    return (
                                        <div key={item.id}>
                                            <Link href={`/article/${item.id}`}>
                                                <Image src={image} alt={item.title} width={290} height={150}
                                                       className="rounded-lg"/>
                                            </Link>
                                            <div className="flex flex-col gap-1 text-sm mt-1">
                                                <Link href={`/article/${item.id}`}
                                                      className="font-semibold">{item.title}</Link>
                                                <div className="flex justify-between items-center">
                                                    <p className="capitalize text-red-500">{item.category}</p>
                                                    <div className="flex items-center gap-1">
                                                        <div
                                                            className="flex items-center gap-1 px-1.5 py-0.5 text-xs">
                                                            <FaHeart />
                                                            <p>{item.likes}</p>
                                                        </div>
                                                        <div
                                                            className="flex items-center gap-1 px-1.5 py-0.5 text-xs">
                                                            <Eye size={17}/>
                                                            <p>{item.views}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : tabView === "about" ? (
                        <div>
                            <p>{about}</p>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}
interface BlogData {
    id: number,
    title: string,
    description?: string,
    author: string,
    createdAt: string,
    category: string,
    readTime: string,
    image: string,
    views: number,
    likes: number,
}

export default Tabs
