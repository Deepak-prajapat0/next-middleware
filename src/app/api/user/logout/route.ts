// src/app/api/user/login/route.ts
import { withDb } from "@/utils/withDb";
import { NextRequest, NextResponse } from "next/server";

export const POST = withDb(async (req: NextRequest) => {
    try {
        // Clear the authentication token cookie
        const response = NextResponse.json({ message: "Logout successful" }, { status: 200 });

        // Set the cookie with an empty value and expired date
        response.cookies.set("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            expires: new Date(0), // Expire immediately
        });

        return response;
    } catch (error: any) {
        return NextResponse.json({ message: "Logout failed", error: error.message }, { status: 500 });
    }
});