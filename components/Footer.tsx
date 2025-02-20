import React from 'react';
import Link from 'next/link';
import categories from "@/data/categories.json";
import ScrollToTop from "./ScrollToTop";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="py-6 relative">
            <div className="flex justify-between pr-6">
                <div className="flex flex-col gap-2 w-4/12">
                    <p className="text-xl font-bold text-red-500">Inkwell</p>
                    <p className="text-md">
                        Craft narratives that ignite inspiration, knowledge, and entertainment
                    </p>
                    <div className="flex items-center gap-3">
                        <Link href="/" className="p-2 rounded-full bg-[#FFFFFF] shadow-md">
                            <div className="p-2 rounded-full bg-red-500">
                                <FaFacebookF className="text-[#FFFFFF]" />
                            </div>
                        </Link>
                        <Link href="/" className="p-2 rounded-full bg-[#FFFFFF] shadow-md">
                            <div className="p-2 rounded-full bg-red-500">
                                <FaLinkedinIn className="text-[#FFFFFF]" />
                            </div>
                        </Link>
                        <Link href="/" className="p-2 rounded-full bg-[#FFFFFF] shadow-md">
                            <div className="p-2 rounded-full bg-red-500">
                                <FaXTwitter className="text-[#FFFFFF]" />
                            </div>
                        </Link>
                        <Link href="/" className="p-2 rounded-full bg-[#FFFFFF] shadow-md">
                         <div className="p-2 rounded-full bg-red-500">
                             <FaInstagram className="text-[#FFFFFF]" />
                         </div>
                        </Link>
                    </div>
                    <p className="text-sm text-gray-500 absolute bottom-7 left-1">Copyright © 2024 Inkwell</p>
                </div>

                <div className="grid grid-cols-4 gap-x-10 gap-y-14 w-8/12 pl-14">
                    {categories.map((category: CategoryData) => {
                        return (
                            <div key={category.id} className="flex flex-col gap-3">
                                <p className="text-lg font-semibold">{category.main}</p>
                                <ul className="list none flex flex-col gap-1">
                                    {category.sub.map((sub: string, index: number) => {
                                        return (
                                            <li className="text-md text-gray-400" key={index}>{sub}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="flex justify-end w-full mt-10">
                <ScrollToTop />
            </div>
        </footer>
    )
}

interface CategoryData {
    id: number,
    main: string,
    sub: string[],
}

export default Footer
