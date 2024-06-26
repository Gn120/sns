import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ScriptParty",
  description: "Generated by create next app",
  icons: {
    icon: "/scriptparty.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} layout`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
