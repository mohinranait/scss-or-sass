const { NextResponse } = require("next/server");
import User from "@/models/UserModel";
import connectDb from "@/utils/db";
import bcrypt from "bcrypt"
export const POST = async (req) => {
    try {
        connectDb();
        const {name,email,password} = await req.json();
        const hashPassword = await bcrypt.hash(password,10);
        const user = await User.create({name,email,password:hashPassword})
        console.log(user);
        return NextResponse.json({message:"Created"},{status:201})
    } catch (error) {
        return NextResponse.json({message: error.message},{status:500});
    }
}