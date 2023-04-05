import React from 'react'
import { Link } from 'react-router-dom';
import './footer.scss'

function Footer() {
  return (
    <footer>
      <nav className="footerNav">
        <Link to="/resume">NEED A DEVELOPER?</Link>
        ||
        <Link to="/contact">NEED A WEBSITE?</Link>
      </nav>
      <p>Copyright © 2023 | Katrina Dierking | Queen Bean Design Cafe</p>
    </footer>
  );
}

export default Footer