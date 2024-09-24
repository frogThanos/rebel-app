import type { Metadata } from "next";
import { Darker_Grotesque } from 'next/font/google'
import "./globals.css";
import NavBar from "./components/NavBar";

const darkerGrotesqueFont = Darker_Grotesque({ subsets: ['latin']});

export const metadata: Metadata = {
  title: "Rebels App",
  description: "Technical interview assignment :P",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${darkerGrotesqueFont.className} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
