import type { Metadata } from "next";
import Sidebar from "./sidebar.jsx";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wallue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-[15%_85%] bg-blue-50">
          <Sidebar />
          {children},
        </div>
      </body>
    </html>
  );
}
