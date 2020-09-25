import React from 'react';
import homeStyles from './home.module.css';
import Container from 'react-bootstrap/Container';

import { PersonaLightShadow } from '../../../assets/images/index';
import CodestaffLogo from '../../../assets/images/codestaff-logo.jpg';

import CalendlyButton from '../../CalendlyButton'
import Announcement from '../../Announcement'
import {navigateTo} from 'gatsby'


class HomeHeader extends React.Component {
  render() {
    return (
      <>
                    <Announcement
        variant="white"
        text="Sorry, currently redesigning my site. Find out more"
        linkText="here"
        /*linkOnClick={() => {
          // Navigate to pricing page
          //navigateTo("/about");
          <a href="https://youtu.be/dQw4w9WgXcQ" rel="nofollow" />
        }}*/
      />
      <section id="top" className="one dark cover">
        {/*<div className="container">*/}
        <Container>
          <div className={homeStyles.Headerbg}>
            <header>
              <div>
                <img
                  src={PersonaLightShadow}
                  alt="Salem Aziel signature logo"
                  className={homeStyles.signature}
                />
              </div>
              <h3 className="alt" style={{ textShadow: '3px 3px 4px black' }}>
              Digital Consultant, Web Developer, <br />
                and System Administrator 
                <br />
              </h3>
              {/*<h4> <strong>HMU, lets talk </strong></h4>*/}
              
               <div style={{padding: '1rem 0', marginTop: '2rem'}}>
               <CalendlyButton />
      </div>
              {/*<icon className="fa fa-code" 
                        style={{
                            fontSize: "2rem",
                            padding: "0 0 1rem",
                            textShadow: '3px 3px 5px black',
                        }} />
                       <p style={{
                          letterSpacing: "0.3rem",
                          textShadow: '3px 3px 3px black',
                        }}>CodeStaff</p>*/}
            </header>
          </div>
          {/*</div>*/}
        </Container>
      </section>
      </>
    );
  }
}

export default HomeHeader;
