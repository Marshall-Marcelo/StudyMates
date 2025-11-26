import React from "react";
import { PageWrapper } from "@/components/ui/Wrapper";
import Sidebar from "@/components/ui/Sidebar";
import Header from "@/components/ui/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="flex gap-2 w-full min-h-screen">
      <Sidebar className="w-[15%]" />
      <div className="flex flex-col gap-2">
        <Header />
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
