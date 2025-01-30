"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";

export default function SignIn() {
  const [popopOpen, setpopopOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setpopopOpen(!popopOpen)}
        className="flex bg-gradient-to-br from-sky-700 to-sky-600 px-5 py-2 rounded-xl border border-sky-500 hover:border-sky-400"
      >
        Sign In
      </button>
      <AnimatePresence>
        {popopOpen && (
          <>
            <div className="w-full flex left-0 px-5 fixed justify-center">
              <div className="flex justify-end md:w-[1060px]"></div>
              <motion.div
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 40 }}
                className="bg-slate-800 space-y-3 border border-slate-600 rounded-md p-5 left-0 mt-7 w-full md:w-12/12 xl:w-[385px] z-50"
              >
                <div className="font-thin text-slate-400 flex justify-between items-center">
                  Authenticate -
                  <button onClick={() => setpopopOpen(false)}>
                    <TfiClose />
                  </button>
                </div>
                <span className="!bg-slate-600 h-[1px] w-full flex" />
                <div className="space-y-2">
                  <button className="px-5 flex hover:bg-white/80 gap-10 items-center py-2 rounded-md bg-white w-full text-black">
                    <FcGoogle size={23} />
                    Continue with Google
                  </button>
                  <button className="px-5 flex gap-10 hover:bg-black/60 items-center py-2 rounded-md bg-black w-full text-white border border-white/20">
                    <FaGithub size={23} />
                    Continue with Github
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
