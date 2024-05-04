import { ITask } from "./types/task";

const baseUrl = "http://localhost:3001";

export const getAllTodos = async (): Promise<ITask[]> =>  {
    const res = await fetch(`${baseUrl}/TaskList`, {cache: 'no-store'});
    const todos = await res.json();
    return todos;
}

export const addToDo = async(todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/TaskList`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const newToDo = await res.json();
    return newToDo;
}

export const editToDo = async(todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/TaskList/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const EditedToDo = await res.json();
    return EditedToDo;
}

export const deleteToDo = async(id: string): Promise<void> => {
    await fetch(`${baseUrl}/TaskList/${id}`, {
        method: 'DELETE',
    })
}