import { NextResponse } from "next/server";
import Post from "../../../../../models/PostMode";

export async function GET(req, {params}){
    try {
        const {id} = params;
        const post = await Post.findById(id);
        return NextResponse.json({post},{status:200})
    } catch (error) {
        return NextResponse.json({message: error.message},{status:500})
    }
}

// update by patch
export const PATCH = async (req, {params}) => {
    try {
        const {id} = params;
        const body = await req.json();
        const post = await Post.findByIdAndUpdate(id, body, {
            new:true,
            runValidators:true,
        } )
        if(!post){
            return NextResponse.json({
                message: "notfound"
            },{status:404})
        }
        return NextResponse.json({
            message: "updated"
        },{status:200})
    } catch (error) {
        return NextResponse.json({message: error.message},{status:500})
    }
}


// delete
export async function DELETE(req, {params}){
    try {
        const {id} = params;
        const post = await Post.findByIdAndDelete(id);
        if(!post){
            return NextResponse.json({message:"Notfound"},{status:404})
        }
        return NextResponse.json({
            message: "Deleted",
        },{
            status: 200,
        })
    } catch (error) {
        return NextResponse.json({message: error.message},{status:500})
    }
}
