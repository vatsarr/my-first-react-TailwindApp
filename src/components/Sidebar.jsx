import { useState } from "react";
import "./sidebar.css";

const links = [
  { label: "Home", icon: "home" },
  { label: "Projects", icon: "grid" },
  { label: "About", icon: "user" },
  { label: "Blog", icon: "list" },
  { label: "Contact", icon: "mail" },
];

export default function Sidebar({ isOpen }) {
  const [active, setActive] = useState("Home");

  return (
    <aside className={`sidebar ${isOpen ? "" : "closed"}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo" />
        <span className="sidebar-title">My Portfolio</span>
      </div>

      <nav className="sidebar-nav">
        {links.map(({ label }) => (
          <div
            key={label}
            className={`nav-item ${active === label ? "active" : ""}`}
            onClick={() => setActive(label)}
          >
            {label}
          </div>
        ))}
      </nav>
    </aside>
  );
}
