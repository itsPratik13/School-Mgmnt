"use client";
import Image from "next/image";
import React from "react";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    present: 4000,
    absent: 2400,
  },
  {
    name: "Tuesday",
    present: 3000,
    absent: 1398,
  },
  {
    name: "Wednesday",
    present: 2000,
    absent: 9800,
  },
  {
    name: "Thursday",
    present: 2780,
    absent: 3908,
  },
  {
    name: "Friday",
    present: 1890,
    absent: 4800,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg h-full p-4 flex flex-col overflow-hidden w-full">
      {/*Title */}
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg">Attendance</h1>
        <Image src="/moreDark.png" alt="more" height={20} width={20} />
      </div>
      {/*Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}} />
          <Legend align="left" 
          verticalAlign="top"
          wrapperStyle={{paddingTop:"10px", paddingBottom:"20px"}}
          />
          <Bar
            dataKey="absent"
            fill="#8884d8"
            activeBar={<Rectangle fill="#FAE27C" stroke="blue" />}
            legendType="circle"
            radius={[10,10,0,0]}
          />
          <Bar
            dataKey="present"
            fill="#82ca9d"
            activeBar={<Rectangle fill="#C3EBFA" stroke="purple" />}
            legendType="circle"
            radius={[10,10,0,0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
