import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Layout/Header/Header";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" [&::-webkit-scrollbar]:w-0">
      <body
        className={`${spaceGrotesk.className} antialiased bg-slate-950/90 text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
