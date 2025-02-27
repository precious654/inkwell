"use server"

import { db } from "@/lib/db"

async function searchCategory(name: string) {
    try {
        const category = await db.category.findMany({
            where: {
                name: {
                    contains: name,
                    mode: "insensitive"
                }
            },
            take: 10,
        });
        if(!category) {
            return {error: "Category not found"};
        } else {
            return {data: category}
        }
    } catch (error) {
        return { error: "Category not found" }
    }
}

export default searchCategory;