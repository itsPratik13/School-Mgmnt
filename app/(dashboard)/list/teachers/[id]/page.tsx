import Image from "next/image";
import React from "react";
import BigCalendar from "@/app/components/BigCalendar";
import Announcements from "@/app/components/Announcements";
import Performance  from "@/app/components/Performance";
import Link from "next/link";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* left  */}
      <div className="w-full xl:w-2/3">
        {/* top  */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* user card  */}
          <div className="bg-[#C3EBFA]  py-6 rounded-md flex-1 flex gap-4">
            {/* image */}
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                height={130}
                width={130}
                className="w-30 h-30 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Leonard Snyder</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>
          {/* small cards */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* card  */}
            <div className="  bg-white p-4 rounded-md md:w-[48%] xl:w-[45%] 2xl:w-[48%] flex w-full gap-4">
              <Image
                src="/singleAttendance.png"
                alt=""
                height={24}
                width={24}
                className="h-6 w-6"
              />
              <div className="  flex flex-col gap-4 pb-2">
                <h1 className="text-xl font-semibold">91%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            <div className="  bg-white p-4 rounded-md md:w-[48%] xl:w-[45%] 2xl:w-[48%] flex w-full gap-4">
              <Image
                src="/singleBranch.png"
                alt=""
                height={24}
                width={24}
                className="h-6 w-6"
              />
              <div className="  flex flex-col gap-4 pb-2">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
            <div className="  bg-white p-4 rounded-md md:w-[48%] xl:w-[45%] 2xl:w-[48%] flex w-full gap-4">
              <Image
                src="/singleAttendance.png"
                alt=""
                height={24}
                width={24}
                className="h-6 w-6"
              />
              <div className="flex flex-col gap-4 pb-2">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            <div className=" bg-white p-4 rounded-md md:w-[48%] xl:w-[45%] 2xl:w-[48%] flex w-full gap-4">
              <Image
                src="/singleClass.png"
                alt=""
                height={24}
                width={24}
                className="h-6 w-6"
              />
              <div className="flex flex-col gap-4 pb-2">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom  */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Teacher's Schedule</h1>
          <BigCalendar/>
        </div>
      </div>
      {/* right  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-700">
            <Link href="/" className="rounded-md p-4 bg-[#EDF9FD]">Teacher's Classes</Link>
            <Link href="/" className="rounded-md p-4 bg-[#F1F0FF]">Teacher's Students</Link>
            <Link href="/" className="rounded-md p-4 bg-[#FEFCE8]">Teacher's Lessons </Link>
            <Link href="/" className="rounded-md p-4 bg-pink-50">Teacher's Exams</Link>
            <Link href="/" className="rounded-md p-4 bg-green-50">Teacher's Assignments</Link>
            
          </div>

        </div>
        <Performance/>
        <Announcements/>
      </div>
    </div>
  );
};

export default SingleTeacherPage;
