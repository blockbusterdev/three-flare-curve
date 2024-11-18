import type { Metadata } from "next";
import "@/assets/scss/style.scss";
import store from "@/store";
import { ReactNode } from "react";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "JSON Reader",
  description: "Read JSON file uploaded",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
