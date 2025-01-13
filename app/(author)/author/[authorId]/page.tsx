import React from 'react'
import Image from "next/image";
import Link from "next/link";
import profile from "@/public/assets/profile2.jpg";
import creators from "@/data/creators.json";

const Page = async ({params}: {params: Promise<{authorId: string }>}) => {
    const authorId = (await params).authorId;
    const author = creators.filter( (item: CreatorData ) => authorId === item.id.toString() );

    return (
        <main className="py-5">
            <div>
                {
                    author.map( (item: CreatorData ) => {
                        return (
                            <div key={item.id}>
                                <div className="flex justify-between">
                                    <div className="flex gap-5">
                                        <Image src={profile} alt={item.name} width={250} className="rounded-lg"/>
                                        <div className="w-5/12 flex flex-col gap-2 font-medium text-sm self-end">
                                            <p className="text-3xl font-medium capitalize">{item.name}</p>
                                            <p>{item.profession}</p>
                                            <p>Based in <span className="capitalize">{item.location}</span></p>
                                            <p>{item.bio}</p>
                                            <div className="mt-2">
                                                <button
                                                    className="border-2 border-[#333333] p-2 shadow-md rounded-lg font-medium hover:text-[#FFFFFF] hover:bg-[#333333]">Get
                                                    in touch
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-8 self-end">
                                        <div>
                                            <p>Articles</p>
                                            <p className="font-semibold text-2xl">{item.articles}</p>
                                        </div>
                                        <div>
                                            <p>Likes</p>
                                            <p className="font-semibold text-2xl">{item.likes}</p>
                                        </div>
                                        <div>
                                            <p>Views</p>
                                            <p className="font-semibold text-2xl">{50}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <div className="w-full border-b border-gray-300 flex items-center gap-3">
                                    <Link href="" className="hover:border-b-2 pb-2 border-[#333333]">Articles</Link>
                                        <Link href="" className="hover:border-b-2 pb-2 border-[#333333]">Likes</Link>
                                        <Link href="" className="hover:border-b-2 pb-2 border-[#333333]">About</Link>
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

interface CreatorData {
    id: number,
    name: string,
    company: string,
    profession: string,
    location: string,
    bio: string,
    description: string,
    articles: number,
    likes: number,
}

export default Page