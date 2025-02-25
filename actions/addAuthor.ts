"use server"
import { db } from "@/lib/db";
import { auth } from "@/auth";

interface Author {
    name: string,
    bio: string,
    userId: string,
}

interface AuthorData {
    data?: Author,
    error?: string
}

async function addAuthor(formData: FormData): Promise<AuthorData> {
    const name = formData.get('name');
    const bio = formData.get('bio');
    const session = await auth();

    if(!name || name === "" || !bio || bio === "") {
        return { error: "All fields are required" }
    }

    const user = session?.user?.id ?? "";

    try {
        const author = await db.author.create({
            data: {
                name: name.toString(),
                bio: bio.toString(),
                userId: user,
            }
        });
        if(!author) {
            return { error: "You could not add author to the database" }
        } else {
            return {data: author}
        }
    } catch (error) {
        return { error: "An error occurred" };
    }
}

export default addAuthor;