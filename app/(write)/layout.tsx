import { Montserrat } from "next/font/google";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600"],
  display: "swap",
  variable: "--font.montserrat",
})

export const metadata = {
  title: 'Write',
  description: 'Write your article',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  )
}
