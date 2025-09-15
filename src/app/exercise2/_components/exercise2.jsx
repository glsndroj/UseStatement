import React from "react";

export const Exercise2 = (props) => {
  const { number, increase, decrease } = props;
  return (
    <>
      <div className="flex flex-col items-center mt-[500px] gap-2">
        <div className="input w-[80px] h-[50px] text-center text-3xl">
          {number}
        </div>
        <div className="btnContainer flex gap-5">
          <button
            onClick={decrease}
            className="name bg-amber-600 px-4 py-2 rounded-md cursor-pointer active:bg-amber-800"
          >
            -
          </button>
          <button
            onClick={increase}
            className="name bg-amber-600 px-4 py-2 rounded-md cursor-pointer active:bg-amber-800"
          >
            +
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
