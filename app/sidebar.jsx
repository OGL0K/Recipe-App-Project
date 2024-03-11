"use client";
import Image from "next/image";
import HomeIcon from "../public/home.svg";
import TargetIcon from "../public/target.svg";
import NoteIcon from "../public/note.svg";
import AppIcon from "../public/app_logo.png";

import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  return (
    <main>
      <div className="h-screen">
        <div className="flex items-center p-8">
          <Image src={AppIcon} width={50} className="rounded-full" />
          <p className="text-3xl font-extralight text-blue-900">allue</p>
        </div>
        <div className="h-3/5 rounded-r-2xl bg-blue-900">
          <div className="grid grid-cols-1 pt-10">
            <div className="flex items-center gap-2 p-10">
              <Image src={HomeIcon} width={35} />
              <button
                className="font-mono text-xl text-white"
                type="button"
                onClick={() => router.push("/#")}
              >
                Dashboard
              </button>
            </div>
            <div className="flex items-center gap-2 p-10">
              <Image src={TargetIcon} width={35} />
              <button
                className="font-mono text-xl text-white"
                type="button"
                onClick={() => router.push("/targets")}
              >
                My Targets
              </button>
            </div>
            <div className="flex items-center gap-2 p-10">
              <Image src={NoteIcon} width={35} />
              <button
                className="font-mono text-xl text-white"
                type="button"
                onClick={() => router.push("/notes")}
              >
                My Notes
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
