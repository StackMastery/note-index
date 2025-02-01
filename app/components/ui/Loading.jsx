import { motion } from "framer-motion";
import { PiSpinnerGapLight } from "react-icons/pi";

export default function Loading() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex justify-center w-full top-0 left-0 bg-slate-800/80 z-[99999999999999] h-screen items-center fixed"
      >
        <PiSpinnerGapLight size={100} className="animate-spin" />
      </motion.section>
    </>
  );
}
