import { NextResponse } from "next/server";
import userData from "./mockUserData.json";
import postData from "./mockPostData.json";

// Handle GET requests
export async function GET(req: Request) {
  console.log("Processing GET request...", req);

  // Parse the query parameters from the request URL
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (userId) {
    // Return posts by the user
    const userPosts = postData.filter(
      (post) => post.userId === parseInt(userId, 10)
    );
    return NextResponse.json(userPosts);
  }

  // Default behavior: return all users
  return NextResponse.json(userData);
}
