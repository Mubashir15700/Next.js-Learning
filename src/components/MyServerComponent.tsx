"use server";

export default async function MyServerComponent() {
  const data = { message: "Temporary server data" };

  return (
    <div>
      <h3>Server Component</h3>
      <p>{data.message}</p>
    </div>
  );
}
