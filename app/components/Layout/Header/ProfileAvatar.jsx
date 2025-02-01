"use client";

import { SignOutAccount } from "@/app/actions/auth.actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CiLogout } from "react-icons/ci";

export default function ProfileAvatar(user) {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Avatar className="ring-4 scale-90 border-sky-400 cursor-pointer border-2">
            <AvatarImage src={user?.user?.image} />
            <AvatarFallback>{user?.user?.name?.slice(0, 1)}</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 shadow-2xl shadow-sky-600 font-thin text-slate-400 space-y-3 border-sky-600 mt-7 mr-5">
          <div className="font-thin  flex justify-between items-center">
            Profile -
          </div>
          <span className="!bg-slate-600 h-[1px] w-full flex" />
          <ul className="space-y-3">
            <li>user - {user?.user?.name}</li>
            <li className="flex gap-2">
              email{" "}
              <span className="w-full overflow-hidden pt-1 bg-white/20 px-2 rounded-full text-white text-xs">
                {user?.user?.email}
              </span>
            </li>
            <li>
              <button
                onClick={SignOutAccount}
                className="flex items-center gap-2"
              >
                <CiLogout size={20} /> Logout
              </button>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
}
