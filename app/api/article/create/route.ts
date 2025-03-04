import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST (req: NextRequest) {
    try {
        const response = await req.json();
        const articleData = response.data;
        console.log(articleData);
        return NextResponse.json({ message: "Article saved successfully" });
    } catch (error) {
        console.log(error);
    }
}