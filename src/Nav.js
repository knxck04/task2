import React from 'react';
import './App.css';
import { Link, Routes } from 'react-router-dom';

function Nav() {
  return (
    <nav>
<h3>Logo</h3>
<u1 className="nav-links">
  <Link>
    <li>About</li>
    </Link>
    <Link>
    <li>Manga</li>
    </Link>
</u1>

    </nav>
  );
}

export default Nav;
