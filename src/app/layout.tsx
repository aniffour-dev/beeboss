import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/global/Header/Navbar";
import Footer from "./components/global/Footer/Footer";
import { Pathway_Extreme } from "next/font/google";

const pathway = Pathway_Extreme({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BeeBoss",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pathway.className} ${pathway.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
