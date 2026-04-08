import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar onMenuClick={() => setSidebarOpen((o) => !o)} />

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <Sidebar isOpen={sidebarOpen} />

        <main style={{ flex: 1, overflow: "auto", padding: "2rem" }}>
          // your page content here
        </main>
      </div>
    </div>
  );
}
