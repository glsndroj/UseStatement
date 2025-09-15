import React from "react";

export const Exercise1 = (props) => {
  const { info, name, age, gender } = props;
  return (
    <>
      <div className="flex flex-col items-center mt-[200px] gap-10">
        <div className=" border-2 rounded-md w-[200px] h-[55px] flex items-center justify-center ">
          {info}
        </div>
        <div className="btnContainer flex gap-5">
          <button
            onClick={name}
            className="name bg-amber-600 px-4 py-2 rounded-md cursor-pointer active:bg-amber-800"
          >
            Name
          </button>
          <button
            onClick={age}
            className="age bg-amber-600 px-4 py-2 rounded-md cursor-pointer active:bg-amber-800"
          >
            Age
          </button>
          <button
            onClick={gender}
            className="gender bg-amber-600 px-4 py-2 rounded-md cursor-pointer active:bg-amber-800"
          >
            Gender
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
