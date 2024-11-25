import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Nav from "@/app/(components)/Nav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inkwell",
  description: "Read and share inspirational narratives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="container">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
