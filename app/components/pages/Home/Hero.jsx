"use client";

import { ShineBorder } from "@/components/ui/shine-border";
import LineBreack from "../../ui/LineBreack";
import Video from "./Video";
import { Particles } from "@/components/ui/particles";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="flex justify-center">
        <div className="inline-flex md:text-center flex-col px-5 justify-center gap-5 !pt-24 py-40 xl:py-60 max-w-primary md:items-center">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-slate-800 w-fit !font-thin no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs leading-6  text-white inline-block"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full  py-0.5 px-4 ring-1 ring-white/10 ">
              <span>{`Free AI code share platform`}</span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </motion.button>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl text-slate-200"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Share <span className="text-sky-600">code</span> with developers⚡️
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-thin"
          >
            Note Index is an online collaborative code editor for technical
            interviews, pair programming,
            <LineBreack /> teaching, and more, enhancing real-time teamwork and
            communication.
          </motion.p>
          <Link href={`/new`}>
            <motion.button
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0284C7_0%,#0369A1_25%,#7DD3FC_50%,#0369A1_75%,#0284C7_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl bg-sky-800 hover:bg-sky-500 transition-colors">
                Share Code
              </span>
            </motion.button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full flex justify-center"
          >
            <ShineBorder
              className={`max-w-[1000px] w-full`}
              borderRadius={20}
              color={["#7dd3fc", "#0284c7", "#075985"]}
            >
              <Video />
            </ShineBorder>
          </motion.div>
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
