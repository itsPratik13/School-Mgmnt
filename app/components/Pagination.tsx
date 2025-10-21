import React from "react";

const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between text-gray-800">
      <button
        disabled={true}
        className=" py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <div className="flex items-center text-sm">
        <button className="px-2 rounded-lg bg-[#C3EBFA]">1</button>
        <button className="px-2 rounded-lg ">2</button>
        <button className="px-2 rounded-lg ">3</button>
        ...
        <button className="px-2 rounded-lg ">10</button>
      </div>
      <button
    disabled={false}
    className=" py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 
disabled:cursor-not-allowed cursor-pointer"
  >
    Next
  </button>
    </div>
  );
};

export default Pagination;
