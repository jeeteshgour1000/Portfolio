import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm <tr></tr>Jeetesh Gour<br />
        
      </SectionTitle>
      <SectionText>
        I am an experienced Full Stack developer with a strong background in JavaScript,
        TypeScript, React.js, Node.js, CSS, PostgreSQL, MongoDB and Next.js
       , skilled in designing and implementing and passion for creating dynamic online experience
      </SectionText>
      <Button onClick={() => (window.location = "https://jeeteshgour.vercel.app/")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;