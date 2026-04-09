import { useState } from "react";
import { Menu, Home, Folder, ChevronDown, Settings, Users } from "lucide-react";
import SidebarItem from "./SidebarItem";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState({
    projects: true,
  });

  const toggleMenu = (key) => {
    setOpenMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <aside
      className={`flex h-full flex-col border-r border-slate-200 bg-white transition-all duration-300 dark:border-slate-800 dark:bg-slate-900 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex-1 overflow-y-auto p-3">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="mb-2 flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Menu size={20} />
          {!collapsed && <span className="text-sm">Collapse</span>}
        </button>

        <SidebarItem
          icon={<Home size={20} />}
          label="Dashboard"
          collapsed={collapsed}
        />

        <div className="mt-1">
          <button
            onClick={() => toggleMenu("projects")}
            className="flex w-full items-center justify-between rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <div className="flex items-center gap-3">
              <Folder size={20} />
              {!collapsed && <span className="text-sm">Projects</span>}
            </div>

            {!collapsed && (
              <ChevronDown
                size={18}
                className={`transition-transform ${openMenus.projects ? "rotate-180" : ""}`}
              />
            )}
          </button>

          {!collapsed && openMenus.projects && (
            <div className="mt-1 ml-9 space-y-1">
              <button className="block rounded-md px-2 py-2 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
                Active
              </button>
              <button className="block rounded-md px-2 py-2 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
                Archived
              </button>
            </div>
          )}
        </div>

        <SidebarItem
          icon={<Users size={20} />}
          label="Team"
          collapsed={collapsed}
        />
        <SidebarItem
          icon={<Settings size={20} />}
          label="Settings"
          collapsed={collapsed}
        />
      </div>

      <div className="border-t border-slate-200 p-3 dark:border-slate-800">
        <ThemeToggle collapsed={collapsed} />
      </div>
    </aside>
  );
}
