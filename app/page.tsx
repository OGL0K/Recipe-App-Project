import Sidebar from "./sidebar.jsx";
import Dashboard from "./dashboard.jsx";

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-[20%_80%]">
        <Sidebar />
        <Dashboard />
      </div>
    </main>
  );
}
