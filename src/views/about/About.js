import React from 'react'
import Layout from '../../components/layout/Layout'
import './about.scss'

import Gallery from '../../components/gallery/Gallery';




function About() {

 
  return (
    <Layout>
      <section className="about">
        <h2>ABOUT KATRINA DIERKING</h2>

        <section className="midAbout">
          <section className="aboutLeft">
            Between crocheting, sculpting, wood-working and coding, creating is my happy-place. 

            
          </section>

          <section className="aboutRight">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            modi nihil, maxime autem minus, earum animi recusandae alias, dolor
            similique accusamus. Natus minima tempore, ducimus omnis nulla
            accusamus impedit ullam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Modi iure commodi officia cupiditate similique
            harum vitae vero impedit eius facere eos cumque illum nihil eligendi
            temporibus necessitatibus, earum ipsa quas.
          </section>
        </section>

        <section className="bottomAbout">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            deleniti, voluptatem veniam, necessitatibus dolor blanditiis facilis
            reprehenderit quasi laudantium tenetur nostrum perferendis nulla est
            magnam doloribus consequatur at quibusdam dolore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            deleniti, voluptatem veniam, necessitatibus dolor blanditiis facilis
            reprehenderit quasi laudantium tenetur nostrum perferendis nulla est
            magnam doloribus consequatur at quibusdam dolore?
          </p>
        </section>

        <Gallery />
      </section>
    </Layout>
  );
      }
      
      export default About

    