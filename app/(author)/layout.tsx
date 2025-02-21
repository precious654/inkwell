import Nav from "@/components/Nav";
import {Poppins} from "next/font/google";
import "@/app/globals.css";

export const metadata = {
  title: 'Author',
  description: 'Author Bio',
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600"],
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="containeer">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  )
}
