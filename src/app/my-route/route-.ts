import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log(`GET request received: ${request.url}`);
  return NextResponse.json({ message: "GET request received!" });
}

export async function POST(request: Request) {
  console.log(`POST request received: ${request.url}`);
  return NextResponse.json({ message: "POST request received!" });
}

export async function PUT(request: Request) {
  console.log(`PUT request received: ${request.url}`);
  return NextResponse.json({ message: "PUT request received!" });
}

export async function DELETE(request: Request) {
  console.log(`DELETE request received: ${request.url}`);
  return NextResponse.json({ message: "DELETE request received!" });
}

export async function PATCH(request: Request) {
  console.log(`PATCH request received: ${request.url}`);
  return NextResponse.json({ message: "PATCH request received!" });
}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and set the appropriate Response `Allow` header depending on the other methods defined in the Route Handler.
export async function OPTIONS(request: Request) {
  console.log(`OPTIONS request received: ${request.url}`);
  return NextResponse.json({ message: "OPTIONS request received!" });
}
