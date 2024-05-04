"use client";

import { addToDo } from "@/api";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import {v4 as uuidv4 } from "uuid";

const AddedTask = () => {
  const router = useRouter();
  const [NewTaskvalue, setNewTaskvalue] = useState<string>('');
  
  const HandleSubmitToDo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addToDo({
      id: uuidv4(),
      task: NewTaskvalue
    });
    setNewTaskvalue("");
    router.refresh();
  }

  return (
    <div className="my-7">
      <form onSubmit={HandleSubmitToDo}>
        <div className="flex justify-between items-stretch">
          <input value={NewTaskvalue} onChange={(e) => setNewTaskvalue(e.target.value)} type="task" className="block me-3 grow p-2 text-gray-50 border border-gray-900 rounded-lg bg-gray-800 text-s focus:ring-black focus:border-black" placeholder="Add new task" />
          <button type="submit" className="text-white hover:text-white border-4 border-green-600 hover:bg-green-800 font-medium rounded-lg text-sm px-1 py-2.5 text-center me-2 ms-1 flex-none w-40">ADD TASK</button>
        </div>
      </form>
    </div>
  );
};

export default AddedTask;