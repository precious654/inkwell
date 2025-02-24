"use server"

interface Author {
    name: string,
    bio: string,
}

interface AuthorData {
    data?: Author,
    error?: string
}

async function addAuthor(formData: FormData): Promise<AuthorData> {
    const name = formData.get('name');
    const bio = formData.get('bio');

    if(!name || name === "" || !bio || bio === "") {
        return { error: "All fields are required" }
    }

    const author: Author = {
        name: name.toString(),
        bio: bio.toString(),
    }

    return { data: author}
}

export default addAuthor;