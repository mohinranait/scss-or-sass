

import connectionDb from "@/config/connectDb";
import { NextResponse } from "next/server";
import Post from "../../../../models/PostMode";

export async function POST(req) {
    try {
        connectionDb();
        const data = await req.json();
        const post = await Post.create(data);
        return NextResponse.json({message: "Created",success:true},{status:201})
    } catch (error) {
        return NextResponse.json({message: error.message})
    }
}

// all posts 
export async function GET(){
    try {
        const posts = await Post.find();
        return NextResponse.json({posts},{status:200})
    } catch (error) {
        return NextResponse.json({message:error.message})
    }
}

