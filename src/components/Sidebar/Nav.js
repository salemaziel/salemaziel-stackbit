import React from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from '../Scroll';
import { Link } from 'gatsby'

import './sidebar.css'

import {
  FaHome,
  FaUser,
  FaPhotoVideo,
  FaEnvelope
} from 'react-icons/fa'


export default function Nav({ sections = [] }) {
  return (
    <nav id="nav">
      <ul>
        <li>
        <Link to="/" className="NavItems">
        <FaHome className="mr-5"/>
          Home
        </Link>
        </li>
        
        {/*<li>
        <Link to="/home2" className="NavItems">
        <span className="icon fa-home" />
          Home2-SinglePage
        </Link>
        </li>*/}


        <li>
        <Link to="/about" className="NavItems">
        <FaUser className="mr-5"/>
          About Me
        </Link>
        </li>

        {/*<li >
        <Link to="/services" className="NavItems">
          <span className="icon fa-code " />
          Services
        </Link>
        </li>*/}

        <li>
        <Link to="/portfolio" className="NavItems">
          <FaPhotoVideo className="mr-5"/>
          Portfolio
        </Link>
        </li>
        <li>
        <Link to="/contact" className="NavItems">
        <FaEnvelope className="mr-5"/>
          Contact
        </Link>
        </li>

        {/*<Scrollspy
          items={sections.map(s => s.id)}
          currentClassName="active"
          offset={-300}
        >
          {sections.map(s => {
            return (
              <li key={s.id}>
                <Scroll type="id" element={s.id}>
                  <a href={`#${s.id}`} id="top-link">
                    <span className={`icon ${s.icon}`}>{s.name}</span>
                  </a>
                </Scroll>
              </li>
            );
          })}
        </Scrollspy>*/}
      </ul>
    </nav>
  );
}
