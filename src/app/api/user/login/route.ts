// src/app/api/user/login/route.ts
import User from "@/models/userModel";
import { withDb } from "@/utils/withDb";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

export const POST = withDb(async (req: NextRequest) => {
    try {
        // console.log(await req.json())
        const { email, password } = await req.json();
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        if (user.password !== password) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }

        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY!, { expiresIn: "1h" });

        // Set the token as an HTTP-only cookie
        cookies().set({
            name: "token",
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60, // 1 hour
        });


        return NextResponse.json(user, { status: 200 });
    } catch (error:any) {
        return NextResponse.json({ message: "Server error", error: error.message }, { status: 500 });
    }
});
