import React from "react";

export const Exercise4 = (props) => {
  const { name, age, printName, printAge, setName, setAge, studentName } =
    props;
  return (
    <>
      <div className="flex flex-col items-center mt-[500px] gap-7">
        <div className="w-[300px] h-[30px] flex items-center justify-center gap-5 ">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter a name"
            className="border-1 rounded-sm"
          />
        </div>
        <div className="w-[300px] h-[30px] flex items-center justify-center gap-5 ">
          <input
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder="Enter a age"
            className="border-1 rounded-sm"
            type="number"
          />
        </div>
        <button
          onClick={() => {
            studentName(), setName(""), setAge("");
          }}
          className="bg-amber-500 py-2 px-4 rounded-md active:bg-amber-700 cursor-pointer"
        >
          Add
        </button>
        <div className="studentList flex flex-col">
          <h2 className="font-bold">Students: </h2>
          <p>Student name: {printName} </p>
          <p>Student age: {printAge} </p>
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
