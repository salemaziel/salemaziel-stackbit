import React from 'react'
import pic2 from '../../../assets/images/pic02.jpg';
import pic3 from '../../../assets/images/pic03.jpg';
import pic4 from '../../../assets/images/pic04.jpg';
import pic5 from '../../../assets/images/pic05.jpg';
import pic6 from '../../../assets/images/pic06.jpg';
import pic7 from '../../../assets/images/pic07.jpg';
import pic8 from '../../../assets/images/pic08.jpg';

import { FTPACAB, UCSB, AlwaysSunny, Hackerman, Lawsdontexist, Revolutionary, WordpressLogo, Terminal2, Linuxlogo, HTML5logo, GatsbyReactLogos, Webservices, UsedToSmoke, CodestaffLogo } from '../../../assets/images/index'


const SectionTwo = () => (
    <section id="portfolio" className="two">
    <div className="container">
      <header>
        <h2>Who Am I?</h2>
      </header>

      <p>
      If you're lazy or short on time, this is basically me:
      </p>
      <div className="row">
        <div className="col-4 col-12-mobile">
          <article className="item">
            <a href="/#" className="image fit">
              <img src={FTPACAB} alt="" />
            </a>
           {/* <header>
              <h3>Ipsum Feugiat</h3>
            <header> */}
          </article>
          <article className="item">
            <a href="/#" className="image fit">
              <img src={Linuxlogo} alt="" />
            </a>
           {/* <header>
              <h3>Rhoncus Semper</h3>
            <header> */}
          </article>
          <article className="item">
            <a href="/#" className="image fit">
              <img src={AlwaysSunny} alt="" />
            </a>
           {/* <header>
              <h3>Dolor Penatibus</h3>
            <header> */}
          </article>

          <article className="item">
            <a href="/#" className="image fit">
              <img src={UsedToSmoke} alt="" />
            </a>
           {/* <header>
              <h3>Dolor Penatibus</h3>
            <header> */}
          </article>

        </div>


        <div className="col-4 col-12-mobile">
          <article className="item">
            <a href="/#" className="image fit">
              <img src={UCSB} alt="" />
            </a>
           {/* <header>
              <h3>Magna Nullam</h3>
            <header> */}
          </article>

          <article className="item">
            <a href="/#" className="image fit">
              <img src={Webservices} alt="" />
            </a>
           {/* <header>
              <h3>Rhoncus Semper</h3>
            <header> */}
          </article>

          <article className="item">
            <a href="/#" className="image fit">
              <img src={CodestaffLogo} alt="" />
            </a>
           {/* <header>
              <h3>Rhoncus Semper</h3>
            <header> */}
          </article>

        </div>
        <div className="col-4 col-12-mobile">
          <article className="item">
            <a href="/#" className="image fit">
              <img src={Revolutionary} alt="" />
            </a>
           {/* <header>
              <h3>Dolor Penatibus</h3>
            <header> */}
          </article>


          <article className="item">
            <a href="/#" className="image fit">
              <img src={Terminal2} alt="" />
            </a>
           {/* <header>
              <h3>Rhoncus Semper</h3>
            <header> */}
          </article>

          <article className="item">
            <a href="/#" className="image fit">
              <img src={Hackerman} alt="" />
            </a>
           {/* <header>
              <h3>Natoque Vitae</h3>
            <header> */}
          </article>
        </div>
 


      </div>
    </div>
  </section>

)

export default SectionTwo