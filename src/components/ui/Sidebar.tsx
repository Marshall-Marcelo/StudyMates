import merge from "@/lib/merge";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

interface SidebarProps {
  links?: SidebarLink[];
  className?: string;
}

interface SidebarLink {
  label: string;
  url: string;
  icon?: React.ReactNode;
}

const Sidebar = ({ links, className }: SidebarProps) => {
  return (
    <aside className={merge("flex flex-col gap-2 p-4 text-white", className)}>
      <div className="flex gap-2 justify-center">
        <img className="w-[120px] h-[100px]" src={logo} alt="StudyMates Logo" />
      </div>
      {links?.map((link) => {
        return (
          <Link to={link.url}>
            <div key={link.url} className="flex gap-2">
              {link.icon}
              <span>{link.label}</span>
            </div>
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
