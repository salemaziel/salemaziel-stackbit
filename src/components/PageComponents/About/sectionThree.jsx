import React from 'react'
import pic2 from '../../../assets/images/pic02.jpg';
import pic3 from '../../../assets/images/pic03.jpg';
import pic4 from '../../../assets/images/pic04.jpg';
import pic5 from '../../../assets/images/pic05.jpg';
import pic6 from '../../../assets/images/pic06.jpg';
import pic7 from '../../../assets/images/pic07.jpg';
import pic8 from '../../../assets/images/pic08.jpg';

import { Profilepic, MeStripedShirt } from '../../../assets/images/index'

import { Link } from 'gatsby'

import Button from 'react-bootstrap/Button'

const SectionThree = () => (
<section id="about" className="three">
        <div className="container">
          <header>
            <h2>This is Literally Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={MeStripedShirt} alt="" style={{maxWidth: '40%', height: 'auto', margin: 'auto'}} />
          </a>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <Button as={Link} className="button" to='/about' >Learn More About Me</Button>
        </div>
</section>

)

export default SectionThree