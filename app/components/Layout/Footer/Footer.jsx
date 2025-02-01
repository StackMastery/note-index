import Link from "next/link";
import { FaFacebookF, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="flex backdrop-blur-3xl  z-[9999999999] justify-center w-full border-y  py-10 mt-10 border-slate-700">
        <div className="w-full space-y-5 font-thin max-w-primary px-5">
          <div className="w-full flex justify-between">
            <Link href={`/`} className="text-3xl">
              <span>
                N <span className="text-sky-600">I</span>
              </span>
            </Link>
            <ul className="flex items-center">
              {SocialMedia &&
                SocialMedia.map((social, index) => (
                  <Link
                    key={`socia-key-${social.name}`}
                    href={social?.path}
                    className="flex items-center gap-2 text-slate-300 px-3 hover:bg-slate-700 transition-all py-1 rounded-md"
                  >
                    <span>{social?.icon}</span>
                    {social?.name}
                  </Link>
                ))}
            </ul>
          </div>
          <div className="w-full flex justify-between text-slate-200">
            <div>
              <p>Copyright &copy; {new Date().getFullYear()} Note Index</p>
            </div>
            <address className="text-end">
              +88 0176 2395 985 <br /> labib.developers@gmail.com
            </address>
          </div>
        </div>
      </footer>
    </>
  );
}

const SocialMedia = [
  {
    name: "Github",
    path: "https://github.com/Stackmastery",
    icon: <FaGithub />,
  },
  {
    name: "Facebook",
    path: "https://www.facebook.com/stackmastery",
    icon: <FaFacebookF />,
  },
];
