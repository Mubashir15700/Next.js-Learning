"use client";

import { useEffect, useState } from "react";
import UsersList from "./UsersList";
import { fetchData } from "@/utils/api";

const MyClientComponent = () => {
  const [users, setUsers] = useState<
    {
      name: string;
      id: number;
      posts: { id: number; title: string; body: string }[];
    }[]
  >([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      setLoading(true);
      const data = await fetchData<
        {
          name: string;
          id: number;
          posts: { id: number; title: string; body: string }[];
        }[]
      >("/api");
      setUsers(data);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h4>Client Component</h4>
      <UsersList users={users} loading={loading} />
      <button
        onClick={() => {
          console.log("Fetching...");
          getUsers();
        }}
      >
        Refresh
      </button>
    </div>
  );
};

export default MyClientComponent;
