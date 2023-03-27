import React from 'react'
import Footer from '../footer/Footer'
import { Nav } from '../nav/Nav'

function Layout({children}) {
  return (
    <section className="layout">
      <Nav />
        <main>{children}</main>
      <Footer />
    </section>
  );
}

export default Layout