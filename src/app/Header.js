"use client";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-purple-400" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Menu
        </a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/music">
                Music
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}