import React from 'react';

import SectionOne from './sectionOne'

import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree'
import WhoAmPics from './WhoAmPics'
import Announcement from '../../Announcement'



const AboutPage = () => (
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
    <div id="main">
          <SectionOne />
          <WhoAmPics />


    </div>

  </>
);

export default AboutPage;
