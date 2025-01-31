import { GithubSignIn, GoogleSignIn } from "@/app/actions/auth.actions";
import { ShineBorder } from "@/components/ui/shine-border";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Particles } from "@/components/ui/particles";
import { motion } from "framer-motion";

export const metadata = {
  title: "Authentication",
  description: "Note Index authentication",
};

export default function Auth() {
  return (
    <>
      <section className="flex justify-center">
        <div className="inline-flex justify-center w-full px-5 max-w-primary items-center py-40 md:py-80 xl:h-screen">
          <ShineBorder
            color={["#7dd3fc", "#0284c7", "#075985"]}
            className="p-5 w-full md:w-9/12 xl:w-[400px] bg-slate-900/30"
          >
            <div className="text-start w-full">
              <h2 className="text-2xl text-slate-200">Continue with us</h2>
              <p className="text-sm font-thin pt-2 text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam, aut!
              </p>
              <div className="pt-5 space-y-3">
                <button
                  onClick={GoogleSignIn}
                  className="px-5 flex hover:bg-white/80 gap-10 items-center py-2 rounded-md bg-white w-full text-black"
                >
                  <FcGoogle size={23} />
                  Continue with Google
                </button>
                <button
                  onClick={GithubSignIn}
                  className="px-5 flex gap-10 hover:bg-black/60 items-center py-2 rounded-md bg-black w-full text-white border border-white/20"
                >
                  <FaGithub size={23} />
                  Continue with Github
                </button>
              </div>
            </div>
          </ShineBorder>
          <Particles
            className="absolute inset-0 z-0"
            quantity={100}
            ease={80}
            color={"#fffff"}
            refresh
          />
        </div>
      </section>
    </>
  );
}
