import React from 'react';

import Section from '../../Section';
import Container from 'react-bootstrap/Container';
import SectionHeader from '../../SectionHeader';
import Categories from './Categories'

const SectionTop = (props) => {
  return (
    <>
      <Section
        bg={props.bg}
        textColor={props.textColor}
        size={props.size}
        bgImage={props.bgImage}
        bgImageOpacity={props.bgImageOpacity}
      >
        <Container>
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={props.size}
            spaced={true}
            className="text-center"
          ></SectionHeader>
        </Container>

            <Categories />

      </Section>
    </>
  );
};

export default SectionTop;
