import Image from "next/image";
import MoneyIcon from "../public/money.svg";

export default function Dashboard() {
  const ColoredLine = () => (
    <hr
      style={{
        height: 4,
        margin: 30,
      }}
    />
  );

  return (
    <main>
      <p className="m-8 text-2xl font-extralight">Welcome User</p>
      <div className="m-8 grid grid-cols-4 gap-4">
        <div className="rounded-lg bg-gray-200">
          <p className="m-4 font-mono"> You have </p>
          <p className="m-4 flex items-center justify-center font-mono text-2xl">
            {" "}
            $0.00{" "}
          </p>
        </div>

        <div className="rounded-lg bg-gray-200">
          <p className="m-4 font-mono"> You have reached</p>
          <p className="m-4 flex items-center justify-center font-mono text-2xl">
            {" "}
            0 of your targets{" "}
          </p>
        </div>

        <div className="rounded-lg bg-gray-200">
          <p className="m-4 font-mono"> You have earned</p>
          <p className="m-4 flex items-center justify-center font-mono text-2xl">
            {" "}
            $0.00{" "}
          </p>
        </div>

        <div className="rounded-lg bg-gray-200">
          <p className="m-4 font-mono"> You have spent</p>
          <p className="m-4 flex items-center justify-center font-mono text-2xl">
            {" "}
            $0.00{" "}
          </p>
        </div>
      </div>

      <ColoredLine />

      <div className=" grid grid-cols-2">
        <p className="m-8 text-2xl font-extralight">Your Transactions</p>
        <button className="m-8 flex items-end justify-end text-2xl font-extralight">
          <p> Add an Event </p>
        </button>
      </div>
    </main>
  );
}
