import React from "react";
import merge from "@/lib/merge";

interface SidebarProps {
  links?: SidebarLink[];
  className?: string;
}

interface SidebarLink {
  label: string;
  url: string;
}

const Sidebar = ({ links, className }: SidebarProps) => {
  return <aside className={merge("bg-red-300", className)}>Sidebar</aside>;
};

export default Sidebar;
