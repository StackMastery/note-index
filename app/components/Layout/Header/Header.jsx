import Link from "next/link";
import SignIn from "./SignIn";
import { auth } from "@/auth";
import ProfileAvatar from "./ProfileAvatar";

export default async function Header() {
  const session = await auth();
  return (
    <>
      <header className="flex justify-center px-5 w-full fixed">
        <div className="inline-flex items-center max-w-primary justify-between p-5 py-3 border w-full border-slate-600 rounded-md bg-slate-800 my-5">
          <Link href={`/`} className="text-3xl">
            Note <span className="text-sky-600">Index</span>
          </Link>
          <div className="flex items-center gap-5">
            {!session?.user ? (
              <>
                <SignIn />
              </>
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
