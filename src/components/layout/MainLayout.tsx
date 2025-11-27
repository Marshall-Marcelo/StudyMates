import Sidebar from "@/components/ui/Sidebar";
import Header from "@/components/ui/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="flex gap-2 w-full min-h-screen bg-background">
      <Sidebar className="bg-black w-[15%]" />
      <div className="flex flex-col gap-2 w-full p-4">
        <Header />
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
