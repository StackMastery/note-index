import Link from "next/link";
import { auth } from "@/auth";
import ProfileAvatar from "./ProfileAvatar";
import { FaGithub } from "react-icons/fa";

export default async function Header() {
  const session = await auth();
  return (
    <>
      <header className="flex justify-center w-full  z-[9999999]  border-slate-700 mb-10">
        <div className="inline-flex items-center justify-between p-5 py-3  w-full ">
          <Link href={`/`} className="text-3xl">
            <span>
              N <span className="text-sky-600">I</span>
            </span>
          </Link>
          <div className="flex items-center gap-5">
            <Link
              className="flex items-center gap-5 font-thin hover:underline"
              href={`https://github.com/Stackmastery`}
            >
              <FaGithub size={25} />
              <span className="hidden sm:block">Star on github</span>
            </Link>
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
