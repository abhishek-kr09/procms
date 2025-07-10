// import { prisma } from "@/lib/prisma";
// import { NextResponse } from "next/server";

// export async function GET() {
//   const posts = await prisma.post.findMany({
//     where: {
//       status: "PUBLISHED",
//     },
//   });
//   console.log(posts, "posts");
//   return NextResponse.json(posts, { status: 200 });
// }

// /api/v1/get/route.js
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      where: {
        status: "PUBLISHED"  // <- ✅ VERY IMPORTANT
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("❌ Error in GET /api/v1/get:", error);
    return NextResponse.json({ message: "Error fetching posts" }, { status: 500 });
  }
}

