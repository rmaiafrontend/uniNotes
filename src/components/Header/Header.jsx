import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>UniNotes</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Meus Cursos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
