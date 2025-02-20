import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";


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
    <body
        className={poppins.className}
    >
    <div className="containeer">
        <Nav />
        {children}
        <Footer />
    </div>
    </body>
    </html>
  );
}
