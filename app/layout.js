import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Layout/Header/Header";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { auth } from "@/auth";
import { AppContextProvider } from "./content/AppContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const generateMetadata = async () => {
  const session = await auth();

  return {
    title: session?.user ? ` ${session?.user?.name} - Dashboard` : "Home",
  };
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" [&::-webkit-scrollbar]:w-0">
      <body
        className={`${spaceGrotesk.className} antialiased bg-slate-950/90 text-white`}
      >
        <AppContextProvider>
          <ScrollProgress />
          <Header />
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
