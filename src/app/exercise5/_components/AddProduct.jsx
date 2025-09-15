"use client";
import React from "react";

export const AddProduct = (props) => {
  const { input } = props;
  return (
    <div>
      <p>Student Name: {input.name}</p>
    </div>
  );
};
