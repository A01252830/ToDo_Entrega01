import { getAllTodos } from "@/api";
import AddedTask from "../components/AddedTask";
import TaskTable from "../components/TaskTable";

export default async function Page() {
  const task = await getAllTodos();
  console.log(task);

  return (
    <main className="pt-8 bg-neutral-800 min-h-screen">
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-4">
        <h5 className="mb-4 text-4xl font-extrabold text-white">ToDo Application</h5>
        <AddedTask/>
        <TaskTable task={task}/>
      </div>
    </main>
  );
}
