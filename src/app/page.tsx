"use client";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <button
        onClick={() => {
          router.push("/my-route");
        }}
      >
        My Route
      </button>
    </div>
  );
};

export default Page;
