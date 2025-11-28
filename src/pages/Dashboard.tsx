import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

const Dashboard = () => {
  const [searchSubject, setSearchSubject] = useState<string | undefined>(undefined);
  return (
    <div className="grid grid-cols-3 grid-rows-8 gap-2">
      <Card className="col-start-1 col-end-3 row-start-1 row-end-3 flex justify-between items-center">
        <div className="flex flex-col gap-2 w-[50%]">
          <h1 className="font-semibold text-3xl">Hey Student!</h1>
          <p className="font-extralight">
            Welcome back! We're here to support you on your learning journey. Dive into your classes and keep
            progressing towards your goals.
          </p>
        </div>
        <span>Image Here</span>
      </Card>
      <Card className="col-start-3 col-end-4 row-start-1 row-end-4">Calendar Small Card</Card>
      <Card className="col-start-1 col-end-3 row-start-3 row-end-5">
        <div className="flex justify-between items-center">
          <h2>Assignments</h2>
          <Input
            onChange={(e) => setSearchSubject(e.target.value)}
            value={searchSubject}
            className="bg-gray-100 rounded-xl"
            placeholder="Search by Subject"
          />
        </div>
      </Card>
      <Card className="col-start-3 col-end-4 row-start-4 row-end-7">Attendance Small Card</Card>
      <Card className="col-start-1 col-end-2 row-start-5 row-end-9">Forums</Card>
      <Card className="col-start-2 col-end-3 row-start-5 row-end-8">4x4 Card Grid</Card>
      <Card className="col-start-2 col-end-3 row-start-8 row-end-9">Resources Mini Card</Card>
      <Card className="col-start-3 col-end-4 row-start-7 row-end-9">Notice Board</Card>
    </div>
  );
};

export default Dashboard;
