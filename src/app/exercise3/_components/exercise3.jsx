import React from "react";
export const Exercise3 = (props) => {
  const { color, green, red, yellow, blue, purple } = props;
  return (
    <>
      <div className="flex flex-col items-center mt-[500px] gap-2">
        <div
          className=" border-2 rounded-md w-[200px] h-[55px] flex items-center justify-center"
          style={{ backgroundColor: color }}
        ></div>
        <div className="btnContainer flex gap-5">
          <button
            onClick={green}
            className="name bg-amber-600 px-4 py-2 rounded-md cursor-pointer active:bg-amber-800"
          >
            Green
          </button>
          <button
            onClick={red}
            className="name bg-amber-600 px-4 py-2 rounded-md cursor-pointer active:bg-amber-800"
          >
            Red
          </button>
          <button
            onClick={yellow}
            className="name bg-amber-600 px-4 py-2 rounded-md cursor-pointer active:bg-amber-800"
          >
            Yellow
          </button>
          <button
            onClick={blue}
            className="name bg-amber-600 px-4 py-2 rounded-md cursor-pointer active:bg-amber-800"
          >
            Blue
          </button>
          <button
            onClick={purple}
            className="name bg-amber-600 px-4 py-2 rounded-md cursor-pointer active:bg-amber-800"
          >
            Purple
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
