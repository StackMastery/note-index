import Link from "next/link";
import { auth } from "@/auth";
import ProfileAvatar from "./ProfileAvatar";

export default async function Header() {
  const session = await auth();
  return (
    <>
      <header className="flex justify-center px-5 w-full fixed z-[9999999]">
        <div className="inline-flex items-center max-w-primary justify-between p-5 py-3 border w-full border-slate-700 rounded-xl h-16 bg-slate-800 my-5">
          <Link href={`/`} className="text-3xl">
            Note <span className="text-sky-600">Index</span>
          </Link>
          <div className="flex items-center gap-5">
            {!session?.user ? (
              <Link href={`/auth/continue`}>
                <button className="flex bg-gradient-to-br from-sky-700 to-sky-600 px-5 py-2 rounded-xl border border-sky-500 hover:border-sky-400">
                  Sign In
                </button>
              </Link>
            ) : (
              <>
                <ProfileAvatar user={session.user} />
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
