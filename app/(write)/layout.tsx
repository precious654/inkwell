import { Poppins } from "next/font/google";
import "@/app/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600"],
  display: "swap",
});

export const metadata = {
  title: 'Write Page',
  description: 'Write down your article to post on the blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <div className="containeer">
        {children}
      </div>
      </body>
    </html>
  )
}
