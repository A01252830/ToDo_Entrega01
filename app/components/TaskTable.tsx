import Task from "./Task"
import { ITask } from "@/types/task"
import React from "react";

interface TodoProps {
    task: ITask[];
}

const TaskTable: React.FC<TodoProps> = ({ task }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-blue-100">
            <thead className="text-xs text-white uppercase bg-gray-900 border-b border-gray-600">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Task
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {task.map((taskis) => (
                    <Task key={taskis.id} taskis={taskis} />
                ))}
            </tbody>
        </table>
    </div>

  )
}

export default TaskTable