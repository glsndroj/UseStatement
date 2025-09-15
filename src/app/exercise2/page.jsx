"use client";
// increase and decrease
import { useState } from "react";
import { Exercise2 } from "./_components/exercise2";

export default function Home() {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };
  return <Exercise2 number={number} increase={increase} decrease={decrease} />;
}
