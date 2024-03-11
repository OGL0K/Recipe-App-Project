export default function Home() {
  const ColoredLine = () => (
    <hr
      className="bg-blue-900"
      style={{
        height: 3,
        margin: 30,
      }}
    />
  );

  return (
    <main className="h-screen">
      <div className="m-8 mt-28 h-3/5 rounded-lg bg-blue-200">
        <div className="grid grid-cols-[85%_15%] pt-8">
          <p className="flex items-center justify-center text-2xl font-extralight">
            My Targets
          </p>
          <button className="h-12 w-36 rounded-full bg-blue-900 text-xl font-extralight text-white">
            Add a Target!
          </button>
        </div>
        <ColoredLine />
      </div>
    </main>
  );
}
