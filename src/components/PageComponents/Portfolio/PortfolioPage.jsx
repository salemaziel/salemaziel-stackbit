import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Categories from './Categories'

import SectionTop from './sectionTop'
import Announcement from '../../Announcement'

const PortfolioPage = () => (
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
    <SectionTop
    bg=""
    textColor=""
    size="md"
    bgImage=""
    bgImageOpacity=""
    title="Portolio"
    subtitle="The services I offer"
    size="1"
    >
    <Categories />

    </SectionTop>



</>
)

export default PortfolioPage