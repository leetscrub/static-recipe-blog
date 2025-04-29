import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Bubbly Baker",
  description: "My amazing recipe app",
};

export default function RootLayout({ children }) {

  let header = (
    <header>
      <Link href="/">
        <h1>The Bubbly Baker</h1>
      </Link>
      

    </header>
  )

  let footer = (
    <foooter>
      <p>Made with 💛</p>
    </foooter>
  )

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
