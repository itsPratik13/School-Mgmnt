import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-[#CFCEFF] even:bg-[#FAE27C] flex-1 p-4 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-gray-100 px-2 py-1 rounded-full text-gray-800">
          {new Date().getFullYear()}/
          {(new Date().getFullYear() + 1).toString().slice(-2)}
        </span>
        <Image src="/more.png" alt="more" height={20} width={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">1234</h1>
      <h1 className="capitalize text-sm font-medium text-gray-800">{type}</h1>
    </div>
  );
};

export default UserCard;
