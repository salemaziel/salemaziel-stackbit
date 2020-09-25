import React from 'react';
import pic2 from '../../../assets/images/pic02.jpg';
import pic3 from '../../../assets/images/pic03.jpg';
import pic4 from '../../../assets/images/pic04.jpg';
import pic5 from '../../../assets/images/pic05.jpg';
import pic6 from '../../../assets/images/pic06.jpg';
import pic7 from '../../../assets/images/pic07.jpg';
import pic8 from '../../../assets/images/pic08.jpg';

import Col from 'react-bootstrap/Col';

import {
  FTPACAB,
  UCSB,
  AlwaysSunny,
  Hackerman,
  Lawsdontexist,
  Revolutionary,
  Terminal2,
  Linuxlogo,
  Webservices,
  UsedToSmoke,
  CodestaffLogo,
  Books,
  Soccer,
  Lakers,
  WhatsUpFoo,
} from '../../../assets/images/index';

const SectionTwo = () => (
  <section id="portfolio" className="two">
    <div className="container">
      <header>
        <h2>Who I Am in Pictures, 2020 colorized.</h2>
      </header>

      <p>If you're lazy or short on time, this is basically me:</p>
      <div className="row">
        <Col>
          <div className="image fit">
            <img src={CodestaffLogo} alt="" />
          </div>

          <div className="image fit">
            <img src={Linuxlogo} alt="" />
          </div>

          <div className="image fit">
            <img src={AlwaysSunny} alt="" />
          </div>

          <div className="image fit">
            <img src={UsedToSmoke} alt="" />
          </div>

          <div className="image fit">
            <img src={Soccer} alt="" />
          </div>
        </Col>

        <Col>
          <div className="image fit">
            <img src={UCSB} alt="" />
          </div>

          <div className="image fit">
            <img src={Webservices} alt="" />
          </div>

          <div className="image fit">
            <img src={FTPACAB} alt="" />
          </div>

          <div className="image fit">
            <img src={Books} alt="" />
          </div>

          <div className="image fit">
            <img src={Lawsdontexist} alt="" />
          </div>
        </Col>
        <Col>
          <div className="image fit">
            <img src={Revolutionary} alt="" />
          </div>

          <div className="image fit">
            <img src={Terminal2} alt="" />
          </div>

          <div className="image fit">
            <img src={Hackerman} alt="" />
          </div>

          <div className="image fit">
            <img src={Lakers} alt="" />
          </div>

          <div className="image fit">
            <img src={WhatsUpFoo} alt="" />
          </div>
        </Col>
      </div>

      {/*<div className="row">
        <div className="col-4 col-12-mobile">
          <article className="item">
            <a href="/#" className="image fit">
              <img src={FTPACAB} alt="" />
            </a>
           {/* <header>
              <h3>Ipsum Feugiat</h3>
            <header> * /}
          </article>
          <article className="item">
            <a href="/#" className="image fit">
              <img src={Linuxlogo} alt="" />
            </a>
           {/* <header>
              <h3>Rhoncus Semper</h3>
            <header> * /}
          </article>
          <article className="item">
            <a href="/#" className="image fit">
              <img src={AlwaysSunny} alt="" />
            </a>
           {/* <header>
              <h3>Dolor Penatibus</h3>
            <header> * /}
          </article>

          <article className="item">
            <a href="/#" className="image fit">
              <img src={UsedToSmoke} alt="" />
            </a>
           {/* <header>
              <h3>Dolor Penatibus</h3>
            <header> * /}
          </article>


          <article className="item">
            <a href="/#" className="image fit">
              <img src={Soccer} alt="" />
            </a>
           {/* <header>
              <h3>Dolor Penatibus</h3>
            <header> * /}
          </article>

        </div>


        <div className="col-4 col-12-mobile">
          <article className="item">
            <a href="/#" className="image fit">
              <img src={UCSB} alt="" />
            </a>
           {/* <header>
              <h3>Magna Nullam</h3>
            <header> * /}
          </article>

          <article className="item">
            <a href="/#" className="image fit">
              <img src={Webservices} alt="" />
            </a>
           {/* <header>
              <h3>Rhoncus Semper</h3>
            <header> * /}
          </article>

          <article className="item">
            <a href="/#" className="image fit">
              <img src={CodestaffLogo} alt="" />
            </a>
           {/* <header>
              <h3>Rhoncus Semper</h3>
            <header> * /}
          </article>


          <article className="item">
            <a href="/#" className="image fit">
              <img src={Books} alt="" />
            </a>
           {/* <header>
              <h3>Rhoncus Semper</h3>
            <header> * /}
          </article>

        </div>
        <div className="col-4 col-12-mobile">
          <article className="item">
            <a href="/#" className="image fit">
              <img src={Revolutionary} alt="" />
            </a>
           {/* <header>
              <h3>Dolor Penatibus</h3>
            <header> * /}
          </article>


          <article className="item">
            <a href="/#" className="image fit">
              <img src={Terminal2} alt="" />
            </a>
           {/* <header>
              <h3>Rhoncus Semper</h3>
            <header> * /}
          </article>

          <article className="item">
            <a href="/#" className="image fit">
              <img src={Hackerman} alt="" />
            </a>
           {/* <header>
              <h3>Natoque Vitae</h3>
            <header> * /}
          </article>

          <article className="item">
            <a href="/#" className="image fit">
              <img src={Lakers} alt="" />
            </a>
           {/* <header>
              <h3>Rhoncus Semper</h3>
            <header> * /}
          </article>





        </div>
 


      </div>*/}
    </div>
  </section>
);

export default SectionTwo;
