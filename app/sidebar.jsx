export default function Sidebar() {
  return (
    <main>
      <div className="h-screen">
        <div className="m-8">
          <p className="text-3xl font-extralight text-blue-600">Wallue</p>
        </div>
        <div className="h-3/4 rounded-r-2xl bg-blue-600">
          <div className="grid grid-cols-1">
            <div className="m-10">
              <li className="font-mono text-lg text-white"> Dashboard </li>
            </div>
            <div className="m-10">
              <li className="font-mono text-lg text-white"> My Targets </li>
            </div>
            <div className="m-10">
              <li className="font-mono text-lg text-white"> My Notes </li>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
