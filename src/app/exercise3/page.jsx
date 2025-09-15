"use client";
// bg color
import { useState } from "react";
import { Exercise3 } from "./_components/exercise3";

export default function Home() {
  const [color, setColor] = useState("");
  const green = () => {
    setColor("green");
  };

  const red = () => {
    setColor("red");
  };
  const yellow = () => {
    setColor("yellow");
  };
  const blue = () => {
    setColor("blue");
  };
  const purple = () => {
    setColor("purple");
  };
  return (
    <Exercise3
      color={color}
      green={green}
      red={red}
      yellow={yellow}
      blue={blue}
      purple={purple}
    />
  );
}
