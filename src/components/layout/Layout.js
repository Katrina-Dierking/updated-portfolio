import React from 'react'
import Footer from '../footer/Footer';
import './layout.scss'

import { Nav } from '../nav/Nav'

function Layout({title, children}) {
  return (
    <section className="layout">
      <Nav />
        <h1>{title}</h1>
        <main>{children}</main>
      <Footer />
    </section>
  );
}

export default Layout