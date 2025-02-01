import LineBreack from "../../ui/LineBreack";
import P from "../../ui/P";

export default function Banner() {
  return (
    <>
      <section className="flex w-full justify-center -mt-5 mb-10 border-b pb-10 border-slate-700">
        <div className="w-full max-w-primary px-5">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Let's share something <span className="text-sky-600">New.</span>
            </h2>
            <P>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              nihil ullam dolores aspernatur.
              <LineBreack /> Earum voluptatibus tempora facere, molestiae omnis
              reiciendis.
            </P>
          </div>
        </div>
      </section>
    </>
  );
}
