import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { createClient } from "@supabase/supabase-js";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

const prisma = new PrismaClient();
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const GET = async (req: NextRequest) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.isAdmin) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const url = new URL(req.url);
    const id = Number(url.pathname.split("/").pop());

    if (!id) {
      return NextResponse.json(
        { error: "No article provided" },
        { status: 400 }
      );
    }

    const article = await prisma.article.findUnique({
      where: { id },
    });

    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    return NextResponse.json({ article }, { status: 200 });
  } catch (error) {
    console.error("Error occurred during retrieval:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.isAdmin) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const url = new URL(req.url);
    const id = Number(url.pathname.split("/").pop());

    if (!id) {
      return NextResponse.json(
        { error: "No article provided" },
        { status: 400 }
      );
    }

    const article = await prisma.article.findUnique({
      where: { id },
    });

    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    const { imageUri } = article;

    const deleteFileFromSupabase = async (filePath: string) => {
      const { error } = await supabase.storage.from("blogg").remove([filePath]);

      if (error) {
        throw new Error(`Failed to delete file: ${error.message}`);
      }
    };

    const extractFilePath = (uri: string) => {
      try {
        const url = new URL(uri);
        const pathSegments = url.pathname.split("/").slice(5);
        return pathSegments.join("/");
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(`Invalid URL: ${uri} - ${err.message}`);
        } else {
          throw new Error(`Invalid URL: ${uri}`);
        }
      }
    };

    if (imageUri) {
      const imagePath = extractFilePath(imageUri);
      await deleteFileFromSupabase(imagePath);
    }

    await prisma.article.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Article and associated files deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error occurred during deletion:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
