import Search from "./Search";

export default function Dashboard() {
  return (
    <>
      <section className="flex justify-center px-5">
        <div className="pt-28 w-full max-w-primary justify-between">
          <div className="flex justify-between flex-wrap md:flex-nowrap items-center w-full gap-2 md:gap-5">
            <Search />
            <div className="w-full md:w-60">
              <button className="w-full items-center -translate-y-2 bg-white border border-stone-200 px-5 rounded-md py-[5px] text-black">
                Share New
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
