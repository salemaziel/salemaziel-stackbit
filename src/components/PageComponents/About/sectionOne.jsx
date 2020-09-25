import React from 'react'
import pic2 from '../../../assets/images/pic02.jpg';
import pic3 from '../../../assets/images/pic03.jpg';
import pic4 from '../../../assets/images/pic04.jpg';
import pic5 from '../../../assets/images/pic05.jpg';
import pic6 from '../../../assets/images/pic06.jpg';
import pic7 from '../../../assets/images/pic07.jpg';
import pic8 from '../../../assets/images/pic08.jpg';

import { FTPACAB, UCSB, AlwaysSunny, Hackerman, Lawsdontexist, Revolutionary, WordpressLogo, Terminal2, Linuxlogo, HTML5logo, GatsbyReactLogos, Webservices, UsedToSmoke, CodestaffLogo, Profilepic, MeStripedShirt } from '../../../assets/images/index'
import Row from 'react-bootstrap/Row'
import InstagramEmbed from 'react-instagram-embed';
import Button from 'react-bootstrap/Button'
import {Link} from 'gatsby'

import Col from 'react-bootstrap/Col'

import aboutStyles from './about.module.css'

const SectionOne = () => (

      <section id="about" className="three">
      <div className="container">
        <Row style={{ justifyContent: 'center', textAlign: 'center' }}>
          <Col>
            <header>
              <h2>About Me</h2>
            </header>
          </Col>
        </Row>

        <a href="#" className="image featured">
          <img src={MeStripedShirt} alt="" style={{width:'50%', margin: 'auto'}}/>
        </a>

        <p>
         <strong> I'm Salem Aziel Mackintosh-Benitez. </strong>
        </p>
        <p>
          I'm Mexican-American. I'm a web developer. I'm a graffiti artist. I'm a Systems Adminstrator in training, and by that I mean I self-host open source services that I dont want to pay for, or that I just want to use for fun. Some of these services include <strong>NextCloud Cloud Storage</strong> for my own cloud storage on my own encrypted drive, <strong>Jellyfin Media Hub</strong> for my own media server to eventually get rid of Hulu, Netflix, HBO, Disney+, etc etc etc... <strong>Mautic Marketing Automation</strong>, software for creating automated email marketing campaigns responsive to customer interations, <strong>HumHub Social Network</strong> for a personal social media network that I'm building, as well as <strong>Mastodon Social Platform</strong> for a similar reason, all managed by me on Linux servers. </p>
          <p>
            I also run Linux on my daily work laptop, because Microsoft and Apple have both proven themselves to spy on their users, be really expensive (looking at you, Apple), and just generally suck ass in general. My specialty is Debian-based systems.. Ubuntu, Raspbian, Debian, Kali, Parrot, MX Linux, and so on, with some experience using CentOS, Fedora, OpenSuse, and Arch Linux.</p>
            <p>
              No, I don't run Arch. Atleast not yet for daily use. Too impractical when I have shit to get done, sometimes I don't want to spend hours figuring out why the last update makes my computer boot up into a black screen, mounting and chrooting into the system from a live USB to fix it when I'm just trying to fix a typo on a client's website, or worse, when I'm trying to watch It's Always Sunny and chill. <br />I'll admit Arch is pretty fun though, even if in the absolute nerdiest and uninteresting-to-most-women way possible.
          </p>
          <p>
            If this About Me section seems choppy and disjointed, it's because it is. I just threw some sentences down at random.</p>
            <p>
            I'll fix it up and add to it later when I'm feeling more Shakespearean and less humble.
          </p>
          <Button as={Link} className="button" to='/contact' >Contact Me</Button>

        <br />
        <hr />
        <br />
        <div className={aboutStyles.MoreAbout}>
          <InstagramEmbed
            url="https://www.instagram.com/p/244wrIhZ-5/"
            maxWidth={320}
            hideCaption={true}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            /*style={{margin:'auto'}}*/
          />
          <div style={{margin: '5px 2rem 8rem'}}>
              <h4 style={{color: 'gray!important', fontSize: '1.5rem'}}>More About Me</h4>
              <p>I do graffiti on canvases. There's one from my Instagram to the left. There's a bunch more on my feed. You should check them out. </p>
              <p>
               I haven't uploaded any new stuff in a while, but I will. If you get in touch with me requesting a piece, (and I like you) I'll draw you something :)</p>

               <p>

               </p>
          </div>
        </div>
      </div>
    </section>

)

export default SectionOne