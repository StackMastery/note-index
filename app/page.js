import { auth } from "@/auth";
import Hero from "./components/pages/Home/Hero";
import Dashboard from "./components/pages/Dashboard/Dashboard";

export default async function Home() {
  const session = await auth();

  return (
    <>
      {!session?.user ? (
        <>
          <Hero />
        </>
      ) : (
        <Dashboard />
      )}
    </>
  );
}
