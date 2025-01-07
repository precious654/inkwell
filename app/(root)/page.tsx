import Image from "next/image";
import Link from "next/link";
import SearchForm from "@/app/(components)/SearchForm";
import mongoose from "mongoose"
import data from "@/data/data.json";
import categories from "@/data/categories.json";
import creators from "@/data/creators.json";
import picture from "@/public/assets/john-wick-4-paris-poster.jpg";
import profile1 from "@/public/assets/profile1.jpg";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const newData: BlogData[] = data.filter((item: BlogData) => item.id == 1);
  const anotherData: BlogData[] = data.filter((item: BlogData) => item.id < 5);
  const businessData: BlogData[] = [data[0], data[1]];
  const sportNews: BlogData[] = [data[2], data[3]];

  mongoose.connect("mongodb+srv://odukwechiemeka:" + process.env.MONGODB_PWD + "@cluster0.8yoj9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

  return (
      <main>
          <section className="py-10 w-full flex justify-center text-center bg-[#F9FAFB] rounded-xl mt-10">
              <div className="w-6/12 flex flex-col items-center gap-4">
                  <p className="text-xl font-medium tracking-widest uppercase">
                      Welcome to inkwell
                  </p>
                  <p className="text-xl font-semibold">
                      Craft narratives &#9997; that ignite{" "}
                      <span className="text-red-600">inspiration &#128161;</span>,{" "}
                      <span className="text-red-600">knowledge &#128213;</span>, and
                      <span className="text-red-600"> entertainment &#127916;</span>
                  </p>
              </div>
          </section>

          <section className="mt-10">
              <SearchForm query={query}/>
          </section>

          <section className="mt-20">
              {newData.map((item: BlogData) => {
                  return (
                      <div key={item.id} className="flex justify-between">
                          <Image src={picture} alt={item.title} width={500} className="rounded-xl"/>
                          <div className="px-4 flex flex-col gap-6">
                              <div className="flex items-center gap-1">
                                  <Image src={profile1} alt={item.author} width={25} height={20}
                                         className="rounded-full"/>
                                  <p>{item.author}</p>
                                  <p>. {item.createdAt}</p>
                              </div>
                              <Link href={`/article/${item.id}`} className="font-semibold text-2xl">{item.title}</Link>
                              <p className="text-gray-700">{item.description}</p>
                              <div className="flex items-center gap-1 text-sm">
                                  <p className="text-red-400">{item.category}</p>
                                  <p>. {item.readTime}</p>
                              </div>
                          </div>
                      </div>
                  )
              })}
          </section>

          <section className="mt-20">
              <div className="flex items-center justify-between">
                  <p className="text-2xl font-semibold">Latest News</p>
                  <Link href="/article" className="text-red-400 font-semibold">See all &#8594;</Link>
              </div>

              <div className="flex items-center gap-6 mt-5">
                  {anotherData.map((item: BlogData) => {
                      return (
                          <div key={item.id} className="flex flex-col gap-2 capitalize">
                              <Image src={picture} alt={item.title} className="rounded-xl h-32 mb-1.5"/>
                              <div className="flex items-center gap-1 text-sm">
                                  <Image src={profile1} alt={item.author} width={25} height={20}
                                         className="rounded-full"/>
                                  <p>{item.author}</p>
                                  <p>. {item.createdAt}</p>
                              </div>
                              <Link href={`/article/${item.id}`} className="font-semibold text-lg">{item.title}</Link>
                              <p className="text-gray-700 text-sm">{item.description}</p>
                              <div className="flex items-center gap-1 text-sm">
                                  <p className="text-red-400">{item.category}</p>
                                  <p>. {item.readTime}</p>
                              </div>
                          </div>
                      )
                  })}
              </div>
          </section>

          <section className="mt-20">
              <div className="flex items-center justify-between mb-10">
                  <p className="text-2xl font-semibold capitalize">must read</p>
                  <Link href="/article" className="text-red-400 font-semibold">See all &#8594;</Link>
              </div>

              <div className="grid grid-cols-2 gap-6">
                  {anotherData.map((item: BlogData) => {
                      return (
                          <div key={item.id} className="relative">
                              <Image src={picture} alt={item.title} className="rounded-xl"/>
                              <div className="flex flex-col gap-2 mt-3 text-[#FFFFFF] absolute bottom-4 left-4">
                                  <div className="flex items-center gap-1">
                                      <Image src={profile1} alt={item.author} width={25} height={20}
                                             className="rounded-full"/>
                                      <p>{item.author}</p>
                                      <p>. {item.createdAt}</p>
                                  </div>
                                  <Link href={`/article/${item.id}`} className="font-semibold text-lg">{item.title}</Link>
                                  <div className="flex items-center gap-1 text-sm">
                                      <p className="text-red-400">{item.category}</p>
                                      <p>. {item.readTime}</p>
                                  </div>
                              </div>
                          </div>
                      )
                  })}
              </div>
          </section>

          <section className="mt-20">
              <div className="flex items-center justify-between mb-10">
                  <p className="text-2xl font-semibold capitalize">Editor&#39;s pick</p>
                  <Link href="/article" className="text-red-400 font-semibold">See all &#8594;</Link>
              </div>

              <div className="relative">
                  {newData.map((item: BlogData) => {
                      return (
                          <div key={item.id}>
                              <Image src={picture} alt={item.title} className="rounded-xl" />

                              <div className="flex flex-col gap-2 z-10 text-[#FFFFFF] absolute bottom-6 left-4">
                                  <div className="flex items-center gap-1 text-sm">
                                      <Image src={profile1} alt={item.author} width={25} height={20}
                                             className="rounded-full"/>
                                      <p>{item.author}</p>
                                      <p>. {item.createdAt}</p>
                                  </div>
                                  <Link href={`/article/${item.id}`} className="font-semibold text-lg">{item.title}</Link>
                                  <p className="text-sm">{item.description}</p>
                                  <div className="flex items-center gap-1 text-sm">
                                      <p className="text-red-400">{item.category}</p>
                                      <p>. {item.readTime}</p>
                                  </div>
                              </div>
                          </div>
                      )
                  })}
              </div>

              <div className="flex items-center justify-between mt-5">
                  {anotherData.map((item: BlogData) => {
                      return (
                          <div key={item.id} className="flex flex-col gap-2 p-2 capitalize">
                              <Image src={picture} alt={item.title} className="rounded-xl h-32 mb-1.5"/>
                              <div className="flex items-center gap-1 text-sm">
                                  <Image src={profile1} alt={item.author} width={25} height={20}
                                         className="rounded-full"/>
                                  <p>{item.author}</p>
                                  <p>. {item.createdAt}</p>
                              </div>
                              <Link href={`/article/${item.id}`} className="font-semibold text-lg">{item.title}</Link>
                              <div className="flex items-center gap-1 text-sm">
                                  <p className="text-red-400">{item.category}</p>
                                  <p>. {item.readTime}</p>
                              </div>
                          </div>
                      )
                  })}
              </div>
          </section>

          <section className="mt-20 flex gap-8">
              <div>
                  <div className="flex items-center justify-between mb-10">
                      <p className="text-2xl font-semibold capitalize">Business news</p>
                      <Link href="/article" className="text-red-400 font-semibold">&#8594;</Link>
                  </div>
                  <div className="flex gap-4">
                      {businessData.map((item: BlogData) => {
                          return (
                              <div key={item.id} className="flex flex-col gap-2 p-2 capitalize">
                                  <Image src={picture} alt={item.title} className="rounded-xl h-32 mb-1.5"/>
                                  <div className="flex items-center gap-1 text-sm">
                                      <Image src={profile1} alt={item.author} width={25} height={20}
                                             className="rounded-full"/>
                                      <p>{item.author}</p>
                                      <p>. {item.createdAt}</p>
                                  </div>
                                  <Link href={`/article/${item.id}`} className="font-semibold text-lg">{item.title}</Link>
                                  <p className="text-gray-700 text-sm">{item.description}</p>
                                  <div className="flex items-center gap-1 text-sm">
                                      <p className="text-red-400">{item.category}</p>
                                      <p>. {item.readTime}</p>
                                  </div>
                              </div>
                          )
                      })}
                  </div>
              </div>

              <div>
                  <div className="flex items-center justify-between mb-10">
                      <p className="text-2xl font-semibold capitalize">Sport news</p>
                      <Link href="/article" className="text-red-400 font-semibold">&#8594;</Link>
                  </div>
                  <div className="flex items-center gap-4">
                      {sportNews.map((item: BlogData) => {
                          return (
                              <div key={item.id} className="flex flex-col gap-2 p-2 capitalize">
                                  <Image src={picture} alt={item.title} className="rounded-xl h-32 mb-1.5"/>
                                  <div className="flex items-center gap-1 text-sm">
                                      <Image src={profile1} alt={item.author} width={25} height={20}
                                             className="rounded-full"/>
                                      <p>{item.author}</p>
                                      <p>. {item.createdAt}</p>
                                  </div>
                                  <Link href={`/article/${item.id}`} className="font-semibold text-lg">{item.title}</Link>
                                  <p className="text-gray-700 text-sm">{item.description}</p>
                                  <div className="flex items-center gap-1 text-sm">
                                      <p className="text-red-400">{item.category}</p>
                                      <p>. {item.readTime}</p>
                                  </div>
                              </div>
                          )
                      })}
                  </div>
              </div>
          </section>

          <section className="mt-20">
              <div className="flex items-center justify-between mb-10">
                  <p className="text-2xl font-semibold capitalize">Top creators</p>
                  <Link href="/" className="text-red-400 font-semibold">See all &#8594;</Link>
              </div>

              <div className="flex items-center justify-between">
                  {creators.map((creator: CreatorData) => {
                      return (
                          <div key={creator.id} className="flex items-center gap-3">
                              <Image src={profile1} alt={creator.name} width={70} height={40} className="rounded-full"/>
                              <div className="flex flex-col gap-1">
                                  <p className="capitalize font-semibold text-xl">{creator.name}</p>
                                  <p className="text-red-500">{creator.company}</p>
                              </div>
                          </div>
                      )
                  })}
              </div>
          </section>

          <section className="py-10 px-14 w-full flex justify-between bg-[#F9FAFB] rounded-xl mt-20">
              <div className="w-5/12 flex flex-col gap-4">
                  <p className="text-xl font-medium tracking-widest uppercase">
                      Get first update
                  </p>
                  <p className="text-2xl font-semibold">
                      Get the news in front line by{""}
                      <span className="text-red-600"> subscribing &#9997;</span>
                      to our latest updates
                  </p>
              </div>
              <form action="/" method="POST" className="flex gap-2 items-center">
                  <input type="email" placeholder="Your email" name="email" className="px-4 py-2 outline-0 rounded-lg"/>
                  <button className="bg-red-600 hover:bg-red-400 text-[#FFFFFF] py-2 px-4 rounded-lg">Subscribe</button>
              </form>
          </section>

          <footer className="flex justify-between mt-20 py-6 relative">
              <div className="flex flex-col gap-2 w-4/12">
                  <p className="text-xl font-bold text-red-500">Inkwell</p>
                  <p className="text-md">
                      Craft narratives that ignite inspiration, knowledge, and entertainment
                  </p>
                  <p className="text-sm text-gray-500 absolute bottom-12 left-1">Copyright © 2024 Inkwell</p>
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
          </footer>
      </main>
  );
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
}

interface CreatorData {
    id: number,
    name: string,
    company: string
}

interface CategoryData {
    id: number,
    main: string,
  sub: string[],
}
