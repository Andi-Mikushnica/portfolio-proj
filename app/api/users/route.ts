import connectionToDatabase from "@/lib/db/mongoose";
import {messageSchema} from "@/lib/formUtils/formConstants";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        await connectionToDatabase();
        console.log("Connected to database");
        const body: unknown = await req.json();
        
        const result = messageSchema.safeParse(body);

        if (!result.success) {
            const zodErrors: Record<string, string> = {};
            result.error.issues.forEach((issue) => {
                const key = String(issue.path[0] ?? '');
                zodErrors[key] = issue.message;
            });
            return NextResponse.json({ errors: zodErrors }, { status: 400 });
        }
        
        const { name, email, message } = result.data;
        const newUser = new User({ name, email, message });
        await newUser.save();

        return NextResponse.json(newUser, { status: 201 });
    } catch (err) {
        console.error(err);

        return NextResponse.json(
            { error: "Failed to create user" },
            { status: 500 }
        );
    }
}