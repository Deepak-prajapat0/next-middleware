// lib/withDb.js
import { connectDb } from "@/db/dbconfig";
import { NextRequest, NextResponse } from "next/server";

interface WithDbHandler {
    (req: NextRequest, res: NextResponse): Promise<NextResponse>;
}
export function withDb(handler: WithDbHandler): WithDbHandler {
    return async (req: NextRequest, res: NextResponse): Promise<NextResponse> => {
        try {
            await connectDb(); // Connect to the database once

            // Call the actual handler
            return handler(req, res);
        } catch (error) {
            console.error("Database connection error:", error);
            return NextResponse.json({ message: "Internal server error" }, { status: 500 });
        }
    };
}
