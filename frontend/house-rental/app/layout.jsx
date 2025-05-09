import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HomeHaven | Find Your Perfect Rental Home",
  description: "The easiest way to find rental properties and connect with property owners in real time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Metadata is handled via the metadata object, no need to duplicate */}
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}