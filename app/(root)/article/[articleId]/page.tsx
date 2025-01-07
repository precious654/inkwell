import React from "react";
import Image from "next/image";
import data from "@/data/data.json";

const Page = async ({params}: {params: Promise<{articleId: string }>}) => {
    const articleId = (await params).articleId;
    const article = data.filter((article: BlogData) => articleId === article.id.toString() );

    return (
        <div>
            <div>
                {
                    article.map((article: BlogData) => {
                        return (
                            <div key={article.id}>
                                <div className="flex flex-col gap-2 mb-8">
                                    <p className="text-3xl font-semibold">{article.title}</p>
                                    <p>{article.description}</p>
                                </div>

                                <div className="relative h-80">
                                    <Image src={article.image} alt={article.title} fill/>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
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