import Link from "next/link";
import LayoutSwitch from "./LayoutSwitch";
import Search from "./Search";

export default function Dashboard() {
  return (
    <>
      <section className="flex justify-center px-5">
        <div className="pt-28 w-full max-w-primary justify-between">
          <div className="flex justify-between flex-wrap md:flex-nowrap items-center w-full gap-2 md:gap-5">
            <Search />
            <div className="w-full md:w-96 -translate-y-2 flex gap-5">
              <LayoutSwitch />
              <Link
                href={`/new`}
                className="w-full items-center bg-white border text-center border-stone-200 !font-semibold px-5 rounded-md py-[5px] text-black hover:bg-stone-300"
              >
                Share New
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
