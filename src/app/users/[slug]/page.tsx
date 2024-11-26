"use client";

import { fetchData } from "@/utils/api";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const searchParams = useSearchParams();

  const [slug, setSlug] = useState<string | null>(null);
  const [posts, setPosts] = useState<
    { id: number; userId: number; title: string; body: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    try {
      setLoading(true);
      const data = await fetchData<
        {
          id: number;
          userId: number;
          title: string;
          body: string;
        }[]
      >(`/api?userId=${slug}`);
      setPosts(data);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug);
    });
  }, [params]);

  useEffect(() => {
    if (!slug) return;
    getPosts();
  }, [slug]);

  const name = searchParams.get("name");

  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      <h3>{name}</h3>
      {loading ? (
        <p>Loading...</p>
      ) : posts.length ? (
        posts.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>No posts</p>
      )}
    </div>
  );
}
