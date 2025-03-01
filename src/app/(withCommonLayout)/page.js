import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-24 gap-12">
      <h1 className="text-4xl text-center">Welcome to Next Js Page</h1>
      <Link href="/dashboard">
        <button className="p-4 bg-slate-700 text-white font-bold rounded-xl">
          Dashboard
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
