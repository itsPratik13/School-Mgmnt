import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import {
  parentsData,
  role,
  studentsData,
  teachersData,
  subjectsData,
  classesData,
  lessonsData,
  examsData,
  assignmentsData,
  resultsData,
  eventsData,
} from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const columns = [
  {
    header: "Title",
    accessor: "title",
    classname: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    classname: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    classname: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accessor: "Actions",
  },
];
type Announcements = {
  id: number;
  title: string;
  class: string;
  date: string;
  
  
};

const AnnouncementList = () => {
  const renderRow = (item: Announcements) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#F1F0FF]"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.title}</h3>
          {/* <p className="text-xs text-gray-500">{item.teachers.join(",")}</p> */}
        </div>
      </td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      {/* <td className="hidden md:table-cell">{item.startTime}</td> */}
      {/* <td className="hidden md:table-cell">{item.endTime}</td> */}
      {/* <td className="hidden md:table-cell">{item.type}</td> */}
      {/* <td className="hidden md:table-cell">{item.score}</td> */}
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full background-[#C3EBFA]">
              <Image
                src="/edit.png"
                alt=""
                width={16}
                height={16}
                className=""
              />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full background-[#8884d8]">
              <Image
                src="/delete.png"
                alt=""
                width={16}
                height={16}
                className=""
              />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4  rounded-md flex-1 m-4 mt-0">
      {/*Top title and searchbar and sort by */}
      <div className="flex items-center justify-between ">
        <h1 className="hidden md:block md:text-lg md:font-semibold">
          All Announcements
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
            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FAE27C]">
                <Image src="/plus.png" alt="filter" height={14} width={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/*list */}
      <Table columns={columns} renderRow={renderRow} data={eventsData} />
      {/**pagination */}
      <Pagination />
    </div>
  );
};

export default AnnouncementList;
