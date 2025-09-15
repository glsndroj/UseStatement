import React, { useState } from "react";

export const Exercise5 = (props) => {
  const { DataAddHandler } = props;

  const [name, setName] = useState("");

  return (
    <>
      <div className="flex items-center mt-[200px] flex-col ">
        <div className="flex flex-col gap-2 mt-2 items-center">
          <label>Name: </label>
          <input
            className="rounded-3xl px-2 border-white border-2"
            placeholder="Enter input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <button
            onClick={() => {
              setInputs(), DataAddHandler();
            }}
            className="bg-amber-500 py-2 px-4 rounded-md active:bg-amber-700 cursor-pointer"
          >
            Add
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-50">
        <a href="http://localhost:3000/">
          <button className="bg-green-400 font-bold py-2 px-4 rounded-2xl active:bg-green-700 cursor-pointer">
            Home
          </button>
        </a>
      </div>
    </>
  );
};
