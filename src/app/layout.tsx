import type { Metadata } from "next"
import "@/assets/scss/style.scss"

export const metadata: Metadata = {
  title: "IWDL - Software solution",
  description: "International software company",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en">
    <body>
        {children}
    </body>
  </html>
}
