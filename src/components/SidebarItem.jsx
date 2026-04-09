export default function SidebarItem({ icon, label, collapsed }) {
  return (
    <button className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
      {icon}
      {!collapsed && <span>{label}</span>}
    </button>
  );
}
