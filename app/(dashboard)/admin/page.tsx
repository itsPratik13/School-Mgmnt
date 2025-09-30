import CountChart from "@/app/components/CountChart";
import UserCard from "@/app/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row">
      {/*left side with charts */}
      <div className="w-full lg:w-2/3 flex-col gap-8">
        {/*UserCards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Student" />
          <UserCard type="Teacher" />
          <UserCard type="Parents" />
          <UserCard type="Staff" />
        </div>
        {/*Middle Charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count charts */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart/>

          </div>
          {/* attendance charts */}
          <div className="w-full lg:w-2/3 h-[450px]">

          </div>
        </div>
        {/*Bottom Charts */}
        <div className="flex justify-center gap-">
          <div></div>
        </div>
      </div>
      {/*right side with the calendar events and announcements */}
      <div className="w-full lg:w-1/3"></div>
    </div>
  );
};

export default AdminPage;
