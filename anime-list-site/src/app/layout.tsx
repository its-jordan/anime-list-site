import NavBar from "../components/navBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-neutral-800">
        <NavBar></NavBar>
        <div className="p-4 text-white">{children}</div>
      </body>
    </html>
  );
}
