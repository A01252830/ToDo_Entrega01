import { getAllTodos } from "@/api";

export default async function Home() {
  const task = await getAllTodos();
  console.log(task);

  return (
    <main className="flex justify-center pt-20 bg-neutral-800 min-h-screen">
      <div className="flex flex-col justify-center bg-sky-950 w-[400px] h-[500px] p-10 rounded-2xl border-2 border-black">
        <p className="mb-10 self-center font-bold text-3xl text-slate-200">Login</p>

        <label className="ps-1 mb-1 text-lg text-slate-300">Username</label>
        <input className="block h-10 p-2 mb-5 text-gray-50 border border-gray-900 rounded-lg bg-gray-800 text-s focus:ring-black focus:border-black" placeholder="Type your username..." />
        
        <label className="ps-1 mb-1 mt-4 text-lg text-slate-300">Password</label>
        <input className="block h-10 p-2 mb-5 text-gray-50 border border-gray-900 rounded-lg bg-gray-800 text-s focus:ring-black focus:border-black" placeholder="Type your password..." />

        <button className="self-center text-white bg-green-500 hover:text-white border-4 border-green-600 hover:bg-green-800 font-medium rounded-lg text-sm px-1 text-center mt-12 flex-none w-40 h-10">
          <a href="/todolist">LOG IN</a>
        </button>
      </div>
    </main>
  );
}