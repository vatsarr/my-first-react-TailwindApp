export default function Navbar() {
  return (
    <header className="h-16 border-b border-slate-200 bg-white px-4 dark:border-slate-800 dark:bg-slate-900">
      <div className="grid h-full grid-cols-[auto_1fr_auto] items-center gap-4">
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 font-bold dark:bg-slate-700">
            L
          </div>
        </div>

        <div className="mx-auto w-full max-w-xl">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-sm outline-none focus:border-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400"
          />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">Risto Vatsar</span>
          <button className="rounded-lg bg-slate-900 px-3 py-2 text-sm text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
            Log out
          </button>
        </div>
      </div>
    </header>
  );
}
