import Image from "next/image";
import HomeIcon from "../public/home.svg";
import TargetIcon from "../public/target.svg";
import NoteIcon from "../public/note.svg";
import AppIcon from "../public/app_logo.png";

export default function Sidebar() {
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
              <a className="font-mono text-xl text-white"> Dashboard </a>
            </div>
            <div className="flex items-center gap-2 p-10">
              <Image src={TargetIcon} width={35} />
              <a className="font-mono text-xl text-white"> My Targets </a>
            </div>
            <div className="flex items-center gap-2 p-10">
              <Image src={NoteIcon} width={35} />
              <a className="font-mono text-xl text-white"> My Notes </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
