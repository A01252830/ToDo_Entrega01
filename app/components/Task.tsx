"use client";

import { ITask } from "@/types/task";
import { Modal } from "flowbite-react";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteToDo, editToDo } from "@/api";

interface TaskProps {
    taskis: ITask;
}

const Task: React.FC<TaskProps> = ({ taskis }) => {
    const router = useRouter();

    const [openModalEdit, setModalOpenEdit] = useState(false);
    const [TaskToEdit, setTaskToEdit] = useState<string>(taskis.task);
    
    const HandleEditTask: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editToDo({
            id: taskis.id,
            task: TaskToEdit,
        });
        setModalOpenEdit(false);
        router.refresh();
    }

    const [openModalDelete, setModalOpenDelete] = useState(false);
    const HandleDeleteTask = async (id:string) => {
        await deleteToDo(id);
        setModalOpenDelete(false);
        router.refresh();
    }

    return (
        <tr key={taskis.id} className="bg-gray-800 border-b border-gray-600 hover:bg-gray-600">
            <td scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap w-full">
                {taskis.task}
            </td>
            <td className="flex px-6 py-4 gap-3">

                <svg onClick={() => setModalOpenEdit(true)} cursor="pointer" className="w-6 h-6 text-blue-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clip-rule="evenodd"/>
                </svg>
                <Modal show={openModalEdit} onClose={() => setModalOpenEdit(false)}>
                    <Modal.Body>
                        <form onSubmit={HandleEditTask}>
                            <div>
                                <h3 className="mb-5 text-lg font-normal">Edit the selected task</h3>
                                <input value={TaskToEdit} onChange={(e) => setTaskToEdit(e.target.value)} type="task" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-s focus:ring-blue-500 focus:border-blue-500" placeholder="Edit Task" />
                                <button type="submit" className="focus:outline-none text-white bg-green-600 hover:bg-green-400 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2">
                                    Save
                                </button>
                                <button onClick={() => setModalOpenEdit(false)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>


                <svg onClick={() => setModalOpenDelete(true)} cursor="pointer" className="w-6 h-6 text-blue-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                </svg>
                <Modal show={openModalDelete} onClose={() => setModalOpenDelete(false)}>
                    <Modal.Body>
                    <div className="text-center">
                        <h3 className="mb-5 text-lg font-normal">Are you sure you want to delete this Task?</h3>
                        <div className="flex justify-center gap-4">
                            <button onClick={() => HandleDeleteTask(taskis.id)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                                {"Yes, delete task"}
                            </button>
                            <button onClick={() => setModalOpenDelete(false)} type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                                No, cancel
                            </button>
                        </div>
                    </div>
                    </Modal.Body>
                </Modal>

            </td>
        </tr>
    );
};

export default Task;