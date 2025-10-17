import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import Image from "next/image";
import React from "react";

const columns=[
  {
    header:"Info",
    accessor:"info"
  },
  {
    header:"Teacher ID",
    accessor:"teacherID",
    classname:"hidden md:table-cell"
  },
  {
    header:"Subject",
    accessor:"subject",
    classname:"hidden md:table-cell"
  },
  {
    header:"Phone",
    accessor:"phone",
    classname:"hidden lg:table-cell"
  },
  {
    header:"Address",
    accessor:"address",
    classname:"hidden lg:table-cell"
  },
  {
    header:"Actions",
    accessor:"Actions",
   
  },
 
 
 
 

]

const TeacherList = () => {
  return (
    <div className="bg-white p-4  rounded-md flex-1 m-4 mt-0">
      {/*Top title and searchbar and sort by */}
      <div className="flex items-center justify-between ">
        <h1 className="hidden md:block md:text-lg md:font-semibold">
          All Teachers
        </h1>
        {/*search bar and sort buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FAE27C]">
              <Image src="/filter.png" alt="filter" height={14} width={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FAE27C]">
              <Image src="/sort.png" alt="filter" height={14} width={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FAE27C]">
              <Image src="/plus.png" alt="filter" height={14} width={14} />
            </button>
          </div>
        </div>
      </div>
      {/*list */}
      <Table columns={columns}/>
      {/**pagination */}
     <Pagination/>
    </div>
  );
};

export default TeacherList;
