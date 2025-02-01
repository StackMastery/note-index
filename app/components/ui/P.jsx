export default function P({ children }) {
  return (
    <>
      <p className="font-thin text-slate-300 text-xs md:text-sm font-2">
        {children}
      </p>
    </>
  );
}
