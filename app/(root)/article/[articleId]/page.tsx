import React from "react";
import Image from "next/image";
import data from "@/data/data.json";
import picture from "@/public/assets/peakpx.jpg";
import {CiLinkedin} from "react-icons/ci";
import {LiaFacebookSquare} from "react-icons/lia";
import {RiTwitterXLine} from "react-icons/ri";
import {Copy} from 'lucide-react';
import ArticleNav from "@/components/ArticleNav";

const Page = async ({params}: { params: Promise<{ articleId: string }> }) => {
    const articleId = (await params).articleId;
    const article = data.filter((article: BlogData) => articleId === article.id.toString());

    return (
        <main className="py-3">
            <div>
                {
                    article.map((article: BlogData) => {
                        return (
                            <div key={article.id}>
                                <div className="flex flex-col gap-2 mb-8">
                                    <p className="text-3xl font-semibold">{article.title}</p>
                                    <p>{article.description}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-8">
                                            <div className="flex flex-col gap-2">
                                                <p>Written by {article.author}</p>
                                            </div>
                                            <div>
                                                <p>
                                                    Published on
                                                    <span className="capitalize"> 17th september, 2024</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button
                                                className="border-2 border-[#333333] rounded-lg p-2 flex items-center gap-1.5">
                                                <Copy className="text-[#333333]"/>
                                                Copy link
                                            </button>
                                            <button className="border-2 border-[#333333] p-2 rounded-lg">
                                                <CiLinkedin size={25} className="text-[#333333]"/>
                                            </button>
                                            <button className="border-2 border-[#333333] p-2 rounded-lg">
                                                <LiaFacebookSquare size={25} className="text-[#333333]"/>
                                            </button>
                                            <button className="border-2 border-[#333333] p-2 rounded-lg">
                                                <RiTwitterXLine size={22} className="text-[#333333]"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Image src={picture} alt={article.title} className="article-image"/>
                                </div>

                                <div className="mt-14">
                                    <div className="flex gap-14">
                                        <ArticleNav/>
                                        <div className="w-9/12">
                                            <h2 id="introduction"
                                                className="text-2xl font-semibold mb-3 capitalize">Introduction</h2>
                                            <p className="mb-8">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                A aspernatur assumenda, culpa dolor dolores ducimus excepturi hic id in
                                                minus possimus quos.
                                                Autem deserunt expedita facilis in magnam maxime mollitia non obcaecati
                                                perferendis quas ratione, tempore veritatis!
                                                Ad beatae debitis distinctio facilis numquam quia, saepe tempore
                                                voluptate. Amet, totam ut?
                                            </p>

                                            <h2 id="whoisjohnwick"
                                                className="text-2xl font-semibold my-5 capitalize">Who is John
                                                Wick</h2>
                                            <p className="mb-8">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                A aspernatur assumenda, culpa dolor dolores ducimus excepturi hic id in
                                                minus possimus quos.
                                                Autem deserunt expedita facilis in magnam maxime mollitia non obcaecati
                                                perferendis quas ratione, tempore veritatis!
                                                Ad beatae debitis distinctio facilis numquam quia, saepe tempore
                                                voluptate. Amet, totam ut?
                                            </p>
                                            <p className="mb-8">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                A aspernatur assumenda, culpa dolor dolores ducimus excepturi hic id in
                                                minus possimus quos.
                                                Autem deserunt expedita facilis in magnam maxime mollitia non obcaecati
                                                perferendis quas ratione, tempore veritatis!
                                                Ad beatae debitis distinctio facilis numquam quia, saepe tempore
                                                voluptate. Amet, totam ut?
                                            </p>
                                            <p className="mb-8">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                A aspernatur assumenda, culpa dolor dolores ducimus excepturi hic id in
                                                minus possimus quos.
                                                Autem deserunt expedita facilis in magnam maxime mollitia non obcaecati
                                                perferendis quas ratione, tempore veritatis!
                                                Ad beatae debitis distinctio facilis numquam quia, saepe tempore
                                                voluptate. Amet, totam ut?
                                            </p>

                                            <h2 id="movieplot" className="text-2xl font-semibold my-5 capitalize">movie
                                                plot</h2>
                                            <p className="mb-8">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                A aspernatur assumenda, culpa dolor dolores ducimus excepturi hic id in
                                                minus possimus quos.
                                                Autem deserunt expedita facilis in magnam maxime mollitia non obcaecati
                                                perferendis quas ratione, tempore veritatis!
                                                Ad beatae debitis distinctio facilis numquam quia, saepe tempore
                                                voluptate. Amet, totam ut?
                                            </p>
                                            <p className="mb-8">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                A aspernatur assumenda, culpa dolor dolores ducimus excepturi hic id in
                                                minus possimus quos.
                                                Autem deserunt expedita facilis in magnam maxime mollitia non obcaecati
                                                perferendis quas ratione, tempore veritatis!
                                                Ad beatae debitis distinctio facilis numquam quia, saepe tempore
                                                voluptate. Amet, totam ut?
                                            </p>


                                            <h2 id="moviereview"
                                                className="text-2xl font-semibold my-5 capitalize">movie review</h2>
                                            <p className="mb-8">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                A aspernatur assumenda, culpa dolor dolores ducimus excepturi hic id in
                                                minus possimus quos.
                                                Autem deserunt expedita facilis in magnam maxime mollitia non obcaecati
                                                perferendis quas ratione, tempore veritatis!
                                                Ad beatae debitis distinctio facilis numquam quia, saepe tempore
                                                voluptate. Amet, totam ut?
                                            </p>
                                            <p className="mb-8">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                A aspernatur assumenda, culpa dolor dolores ducimus excepturi hic id in
                                                minus possimus quos.
                                                Autem deserunt expedita facilis in magnam maxime mollitia non obcaecati
                                                perferendis quas ratione, tempore veritatis!
                                                Ad beatae debitis distinctio facilis numquam quia, saepe tempore
                                                voluptate. Amet, totam ut?
                                            </p>

                                            <h2 id="conclusion"
                                                className="text-2xl font-semibold my-5 capitalize">Conclusion</h2>
                                            <p className="mb-8">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                A aspernatur assumenda, culpa dolor dolores ducimus excepturi hic id in
                                                minus possimus quos.
                                                Autem deserunt expedita facilis in magnam maxime mollitia non obcaecati
                                                perferendis quas ratione, tempore veritatis!
                                                Ad beatae debitis distinctio facilis numquam quia, saepe tempore
                                                voluptate. Amet, totam ut?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}
export default Page

interface BlogData {
    id: number,
    title: string,
    description?: string,
    author: string,
    createdAt: string,
    category: string,
    readTime: string,
    image: string,
}