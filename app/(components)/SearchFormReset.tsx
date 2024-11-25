"use client";
import React from "react";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.getElementById("search-form") as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };

  return (
    <button
      className="w-fit py-0.5 px-2 bg-red-400 text-md font-semibold text-[#F5F5F5] rounded-full"
      onClick={reset}
    >
      X
    </button>
  );
};
export default SearchFormReset;
