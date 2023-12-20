import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Backend To Frontend
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem"></DiReact>
        </picture>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            
            <button id="Front">HTML</button>&emsp;
            <button id="Front">CSS</button>&emsp;
            <button id="Front">JavaScript</button>&emsp;
            <button id="Front">TypeScript</button>&emsp;
            <button id="Front">React</button>&emsp;
            <button id="Front">Next Js 13</button>&emsp;
            <button id="Front">Tailwind CSS</button>&emsp;
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem"></DiReact>
        </picture>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            <button id="Node">Node Js</button>
            &emsp;<button id="Express">Express Js</button>
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem"></DiReact>
        </picture>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
          <button id="Database">PostgreSQL</button>&emsp;
          <button id="Database">MySQL</button>&emsp;
          <button id="Database">Redis</button>&emsp;
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem"></DiReact>
        </picture>
        <ListContainer>
          <ListTitle>Devops</ListTitle>
          <ListParagraph>
          <button id="Docker"> Docker </button>&emsp;
          <button id="GIT">GIT</button>&emsp;<button id="AWS">AWS Ec2</button>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem"></DiReact>
        </picture>
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
          <button id="API"> Rest API</button>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
