"use client";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <div style={{ border: "1px solid black", padding: "1rem" }}>
        <h3>Welcome to Home Route</h3>
        <button
          onClick={() => {
            router.push("/users");
          }}
        >
          View Users
        </button>
      </div>
    </div>
  );
};

export default Page;
