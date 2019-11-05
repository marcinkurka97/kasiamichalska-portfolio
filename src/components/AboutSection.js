import React from 'react';
import styled from 'styled-components';
import StyledWrapper from 'components/SectionTemplate';
import { colors } from 'utils';

const SectionTemplateWhite = styled(StyledWrapper)`
  height: 60vh;
  background: ${colors.light};
`;

const AboutContainer = styled.div`
  width: 60%;

  h3 {
    color: ${colors.lead};
    font-size: 36px;
    font-weight: 400;
  }

  p {
    text-align: justify;
    font-size: 24px;
    line-height: 30px;
    font-weight: 300;
  }
`;

const AboutSection = ({ id }) => (
  <SectionTemplateWhite id={id}>
    <AboutContainer>
      <h3>
        Hej, jestem Kasia, jestem studentką grafiki i freelancerem. Od 9 do 15
        robię wszystko to, czego ode mnie oczekują. A później zaczynam tworzyć
        DESIGN.
      </h3>
      <p>
        Studiuję grafikę na Wyższej Szkole Technicznej w Katowicach. Po kilku
        latach mogę powiedzieć, że nie żałuję zmiany branży z IT, która dała mi
        zawód informatyka, na grafikę/sztukę, która zawsze zostawała w tyle z
        róznych powodów. Wiedza IT na któraj bazuję codziennie była nieocenioną
        pomocą w ralizowaniu się jako grafik komputerowy. Znalazłam swoje
        miejsce i nie zamierzam się już nigdzie przeprowadzać.
        <br />
        Projektuję identyfikacje wizualne, plakaty, banery, wizytówki, okładki
        książek, księgi znaku, loga, grafiki 3D a najchętniej ilustracje.
        <br />
        Po godzinach zajmuję się szyciem ubrań, uprawiam jogę oraz uczę się
        francuskiego. Enchanté!
      </p>
    </AboutContainer>
  </SectionTemplateWhite>
);

export default AboutSection;
