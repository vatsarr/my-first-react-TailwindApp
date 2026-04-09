import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeProvider";

export default function ThemeToggle({ collapsed }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      {!collapsed && (
        <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
      )}
    </button>
  );
}
