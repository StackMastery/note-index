"use client";

import { AppContext } from "@/app/content/AppContext";
import { useContext } from "react";
import { CiGrid41, CiBoxList } from "react-icons/ci";

export default function LayoutSwitch() {
  const { layoutIsGrid, setlayoutIsGrid } = useContext(AppContext);

  const toggleLayout = (layout) => {
    if (layout === "grid") {
      setlayoutIsGrid("grid");
      localStorage.setItem("layout", "grid");
    } else {
      setlayoutIsGrid("list");
      localStorage.setItem("layout", "list");
    }
  };

  return (
    <>
      <div className="w-32 flex justify-between gap-2 text-slate-300 items-center border border-slate-700 p-1 rounded-md">
        <button>
          <CiGrid41
            onClick={() => toggleLayout("grid")}
            className={`p-1  rounded-sm ${
              layoutIsGrid === "grid" && "bg-slate-800"
            }`}
            size={27}
          />
        </button>
        <span className="font-thin h-full w-[1px] flex bg-slate-600"></span>
        <button>
          <CiBoxList
            onClick={() => toggleLayout("list")}
            className={`p-1  rounded-sm ${
              layoutIsGrid === "list" && "bg-slate-800"
            }`}
            size={27}
          />
        </button>
      </div>
    </>
  );
}
