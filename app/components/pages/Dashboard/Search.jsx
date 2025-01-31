"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TfiSearch } from "react-icons/tfi";

export default function Search() {
  const router = useRouter();
  const [query, setquery] = useState(null);

  useEffect(() => {
    if (query?.length > 0) {
      setTimeout(() => {
        router.push(`?search=${query}`);
        router.push(`?search=${query}`);
      }, 400);
    } else {
      router.push(`/`);
    }
  }, [query]);

  return (
    <>
      <div className="flex-grow w-full">
        <input
          onChangeCapture={(e) => setquery(e.target.value)}
          className="w-full bg-transparent border pl-10 border-slate-700 focus:ring-1 ring-offset-1 transition-all ring-slate-400 focus:border-transparent ring-offset-slate-950/90 px-5 font-thin text-sm placeholder:font-thin py-2 rounded-md"
          placeholder="Search"
        />
        <div className="w-full justify-between">
          <TfiSearch
            className=" translate-x-4 -translate-y-[25.5px] text-slate-300"
            size={15}
          />
        </div>
      </div>
    </>
  );
}
