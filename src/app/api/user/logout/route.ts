// src/app/api/user/login/route.ts
import { withDb } from "@/utils/withDb";
import { NextRequest, NextResponse } from "next/server";

export const POST = withDb(async () => {
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
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ message: "Server error", error: error.message }, { status: 500 });
        }
        return NextResponse.json({ message: "Unknown server error" }, { status: 500 });
    }
});