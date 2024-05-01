import React from "react";
import { Todo } from "../App";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  handleDelete: (id: number) => void;
  handleComplete: (id: number) => void;
}

const TodoListing = ({
  todos,
  setTodos,
  handleDelete,
  handleComplete,
}: Props) => {
  if (todos.length === 0) {
    return <div className="mt-10">No List Found. </div>;
  }

  return (
    <div className="mt-10 flex flex-col gap-4 ">
      {todos.map((todo, index) => {
        return (
          <div
            className={`w-96 flex justify-between text-white items-start py-2 px-4 cursor-pointer ${
              todo.isCompleted ? "bg-gray-700 line-through" : "bg-gray-900"
            }`}
          >
            <div className="line-clamp-4">
              {index + 1}. {todo.todoItem}
            </div>
            <div className="cursor-pointer mt-1 flex gap-2">
              <AiOutlineFileDone
                onClick={() => handleComplete(todo.id)}
                title="Completed"
              />
              <MdDeleteOutline
                onClick={() => handleDelete(todo.id)}
                title="Delete"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoListing;
