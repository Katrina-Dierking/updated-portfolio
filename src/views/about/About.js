import React from 'react'
import Layout from '../../components/layout/Layout'
import './about.scss'

import Gallery from '../../components/gallery/Gallery';
import Arrow from '../../lotties/Arrow';




function About() {

 
  return (
    <Layout>
      <section className="about">
        <h2>ABOUT KATRINA DIERKING</h2>

        <section className="midAbout">
          <section className="aboutLeft">
            Between crocheting, sculpting, wood-working, writing, and coding,
            creating has always been my happy-place. As long as I'm creating
            something -- anything -- I'm happy and can find the good in a crazy
            world.
            <br />
            <br />
            Hi, I'm <span>Katrina</span>. I'm the founder of <span>Queen Bean Design
            Cafe</span> where I:
            <ul>
              <li className="liOne">
                host monthly craft nights for women in my community
              </li>
              <li >
                create customized hand-crafted products such as some you'll see
                in my gallery below
              </li>
              <li className="liOne">
                teach women to create many DIY projects including woodworking
              </li>
              <li>
                freelance as a software engineer/designer to create websites for
                female-owned businesses.
              </li>
              <li className="liOne">
                help new homeschooling moms create the homeschooling experience
                they want and need for their family
              </li>
            </ul>
     
            Suffice it to say, I love to imagine, design, create, and build many
            things. It's truly what I was created to do.
          </section>

          <Arrow />
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

    