import React from 'react'
import categories from "@/data/categories.json";

const Footer = () => {
    return (
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
    )
}

interface CategoryData {
    id: number,
    main: string,
    sub: string[],
}

export default Footer
