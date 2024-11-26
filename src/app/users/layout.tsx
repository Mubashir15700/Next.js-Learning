export default function MyRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>Welcome to Users Route</h2>
      {/* Other Layout UI */}
      <main>{children}</main>
    </>
  );
}
