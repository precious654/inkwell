"use server"

import { db } from "@/lib/db"

async function searchCategory(name: string) {
    try {
        const category = await db.category.create({
            data: {
                name,
            }
        });
        return { data: category };
    } catch (error) {
        return { error: "Could not create category" };
    }
}

export default searchCategory;