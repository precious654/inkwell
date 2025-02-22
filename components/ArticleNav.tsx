"use client"

import React from 'react'
import Link from "next/link";
import {ArrowRight} from "lucide-react";

const ArticleNav = () => {
    const [activeLink, setActiveLink] = React.useState("");

    const toggleActiveLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
        setActiveLink(event.currentTarget.href);
    }

    return (
        <nav className="w-3/12">
            <div className="flex flex-col gap-4 sticky top-10">
                <Link href="#introduction"
                      className={`article-nav-link ${ activeLink.includes("introduction") ? "text-[#333333]" : "text-gray-300" }`}
                      onClick={toggleActiveLink}
                >
                    Introduction <ArrowRight size={16}/>
                </Link>
                <Link href="#whoisjohnwick"
                      className={`article-nav-link ${ activeLink.includes("whoisjohnwick") ? "text-[#333333]" : "text-gray-300" }`}
                      onClick={toggleActiveLink}
                >
                    Who is John Wick <ArrowRight size={16}/>
                </Link>
                <Link href="#movieplot"
                      className={`article-nav-link ${ activeLink.includes("movieplot") ? "text-[#333333]" : "text-gray-300" }`}
                      onClick={toggleActiveLink}
                >
                    Movie plot <ArrowRight size={16}/>
                </Link>
                <Link href="#moviereview"
                      className={`article-nav-link ${ activeLink.includes("moviereview") ? "text-[#333333]" : "text-gray-300" }`}
                      onClick={toggleActiveLink}
                >
                    movie review <ArrowRight size={16}/>
                </Link>
                <Link href="#conclusion"
                      className={`article-nav-link ${ activeLink.includes("conclusion") ? "text-[#333333]" : "text-gray-300" }`}
                      onClick={toggleActiveLink}
                >
                    conclusion <ArrowRight size={16}/>
                </Link>
            </div>
        </nav>
    )
}
export default ArticleNav
