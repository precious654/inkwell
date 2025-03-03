"use server"
import { db } from "@/lib/db";

async function getCategory(name: string) {
    try {
        const category = await db.category.findUnique({
            where: {
                name: name,
            }
        });

        if (!category) {
            return { error: "Could not find category" };
        } else {
            return {data: category};
        }

    } catch (error) {
        return { error: "Could not find category" };
    }
}

export default getCategory;
