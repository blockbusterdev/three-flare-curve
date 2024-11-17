import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Json Reader",
  description: "Read Json file uploaded",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
