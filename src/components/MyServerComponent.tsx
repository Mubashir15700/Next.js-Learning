"use server";

export default async function MyServerComponent() {
  const data = { message: "Temporary server data" };

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h4>Server Component</h4>
      <p>{data.message}</p>
    </div>
  );
}
