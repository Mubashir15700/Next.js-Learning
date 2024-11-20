"use server";

export default async function MyServerComponent() {
  const serverData = "This is rendered on the server!";

  return (
    <div>
      <h1>Server Component</h1>
      <p>{serverData}</p>
    </div>
  );
}
