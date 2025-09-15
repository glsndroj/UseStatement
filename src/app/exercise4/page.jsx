"use client";
// Student information
import { useState } from "react";
import { Exercise4 } from "./_components/Exercise4";

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [printName, setPrintName] = useState("");
  const [printAge, setPrintAge] = useState("");

  const studentName = () => {
    setPrintName(name);
    setPrintAge(age);
  };
  addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      studentName(), setName(""), setAge("");
    }
  });

  return (
    <Exercise4
      name={name}
      age={age}
      printName={printName}
      printAge={printAge}
      setName={setName}
      setAge={setAge}
      studentName={studentName}
    />
  );
}
