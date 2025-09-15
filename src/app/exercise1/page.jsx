"use client";
import { Exercise1 } from "./_components/Exercise1";
//Presonal information
import { useState } from "react";

export default function Home() {
  const [info, setInfo] = useState("");
  const name = () => {
    setInfo("Galsandorj");
  };
  const age = () => {
    setInfo("32");
  };
  const gender = () => {
    setInfo("Male");
  };

  return <Exercise1 info={info} name={name} age={age} gender={gender}/>;
}
