"use client";

import Link from "next/link";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-purple-400">
      <div className="container-sm">
        <Link className="navbar-brand" href="/">Menu</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/music">Music</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
