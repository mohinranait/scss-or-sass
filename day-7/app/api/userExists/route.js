import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");
    console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}

// Next.js HTTP method
export async function GET(){
  // get all users method
}


// Node server HTTP methods
app.get('/all-users', async (req, res) => {})
app.get('/single-user/:slug', async (req, res) => {})
