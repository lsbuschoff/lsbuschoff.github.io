import type { Metadata } from "next";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";

export const metadata: Metadata = {
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description,
  icons: {
    // Empty data-URI icon => browser shows no favicon (overrides any cached one)
    icon: "data:,",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        <main>{children}</main>
      </body>
    </html>
  );
}
