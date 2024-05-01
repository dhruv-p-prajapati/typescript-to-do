import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleClick: (e: React.SyntheticEvent) => void;
}

const InputComp = ({ todo, setTodo, handleClick }: Props) => {
  return (
    <form onSubmit={handleClick}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="border-2 border-gray-900 py-2 px-4 w-96 border-r-0 focus:outline-none"
        placeholder="Write some text..."
      />
      <button
        type="submit"
        className="border-2 border-gray-900 bg-gray-900 text-white py-2 px-4 border-l-0"
      >
        Add
      </button>
    </form>
  );
};

export default InputComp;
