import Image from "next/image";
import HomeIcon from "../public/home.svg";
import TargetIcon from "../public/target.svg";
import NoteIcon from "../public/note.svg";

export default function Sidebar() {
  return (
    <main>
      <div className="h-screen">
        <div className="m-8">
          <p className="text-3xl font-extralight text-blue-600">Wallue</p>
        </div>
        <div className="h-3/5 rounded-r-2xl bg-blue-600">
          <div className="grid grid-cols-1 pt-10">
            <div className="m-10 flex items-center gap-2">
              <Image src={HomeIcon} width={40} />
              <a className="font-mono text-xl text-white"> Dashboard </a>
            </div>
            <div className="m-10 flex items-center gap-2">
              <Image src={TargetIcon} width={40} />
              <a className="font-mono text-xl text-white"> My Targets </a>
            </div>
            <div className="m-10 flex items-center gap-2">
              <Image src={NoteIcon} width={40} />
              <a className="font-mono text-xl text-white"> My Notes </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
