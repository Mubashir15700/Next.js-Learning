export default function MyRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Welcome to My Route</h1>
      {/* Other Layout UI */}
      <main>{children}</main>
    </>
  );
}
