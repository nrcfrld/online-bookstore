import Header from "@/components/layouts/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { segment: string };
}>) {
  return (
    <>
      <Header></Header>
      <main className="pt-28">{children}</main>
    </>
  );
}
