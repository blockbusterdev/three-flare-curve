import type { Metadata } from "next";
import "@/assets/scss/style.scss";

export const metadata: Metadata = {
  title: "JSON reader",
  description: "Read JSON file uploaded",
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
