"use client";
//Jagsaalt
import { useState } from "react";
import { Exercise5 } from "./_components/Exercise5";
import { AddProduct } from "./_components/AddProduct";

const datas = [];

export default function Home() {
  const [inputs, setInputs] = useState(datas);

  const DataAddHandler = (name) => {
    const newData = {
      name: name,
    };
    setInputs([...inputs, newData]);
  };
  addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      DataAddHandler();
    }
  });

  return (
    <div>
      <Exercise5 DataAddHandler={DataAddHandler} />
      <div>
        {inputs.map((input) => {
          return <AddProduct input={input} key={input.name} />;
        })}
      </div>
    </div>
  );
}
