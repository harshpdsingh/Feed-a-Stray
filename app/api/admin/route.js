import connectDb  from "@/db/connectDb";
import Admin from "@/models/Admin";
import { NextResponse } from "next/server";

// GET /api/admin → fetch the single admin
export async function GET() {
  try {
    await connectDb();
    const admin = await Admin.findOne(); // only one admin expected
    if (!admin) return NextResponse.json({}, { status: 200 });
    return NextResponse.json(admin);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch admin" },
      { status: 500 }
    );
  }
}

// POST /api/admin → create or update admin info
export async function POST(req) {
  try {
    await connectDb();
    const body = await req.json();

    // Delete any existing admin
    await Admin.deleteMany({}); // 🧹 remove old admin(s) if any

    // Create a new admin
    await Admin.create(body);

    return NextResponse.json({ message: "New admin created (old one deleted)" });
  } catch (error) {
    console.error("Admin save error:", error);
    return NextResponse.json(
      { error: "Failed to save admin" },
      { status: 500 }
    );
  }
}

