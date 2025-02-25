"use server"

import {db} from "@/lib/db";
import { auth } from "@/auth";
import {redirect} from "next/navigation";

const checkUser = async () => {
    const session = await auth();
    const user = session?.user?.id;

    const author = await db.author.findUnique({
        where: {
            userId: user
        }
    });

    if (author) {
        redirect("/write")
    } else {
        redirect("/author/create");
    }
}

export default checkUser;