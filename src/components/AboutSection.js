import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StyledWrapper from 'components/SectionTemplate';
import { colors, media } from 'utils';

const SectionTemplateWhite = styled(StyledWrapper)`
  height: 60vh;
  background: ${colors.light};

  ${media.laptop`
    height: 80vh;
  `}

  ${media.tablet`
    height: 60vh;
  `}

  ${media.phone`
    height: 90vh;
  `}
`;

const AboutContainer = styled.div`
  width: 60%;

  h3 {
    color: ${colors.lead};
    font-size: 36px;
    font-weight: 400;
    margin: 0 0 20px 0;
  }

  p {
    margin: 20px 0 0 0;
    text-align: justify;
    font-size: 24px;
    line-height: 30px;
    font-weight: 300;
  }

    ${media.laptop`
    width: 70%;

      h3 {
        font-size: 32px;
        font-weight: 500;
      }
      
      p {
        font-size: 22px;
      }
    `}

  ${media.tablet`
  width: 70%;

    h3 {
      font-size: 32px;
      font-weight: 500;
    }
    
    p {
      font-size: 28px;
      font-weight: 400;
    }
  `}

  ${media.phone`
    width: 80%;

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
      line-height: 24px;
    }
  `}
`;

const AboutSection = ({ id }) => (
  <SectionTemplateWhite id={id}>
    <AboutContainer>
      <h3>
        Hej, jestem Kasia, jestem studentką grafiki i freelancerem. Od&nbsp;9 do
        15 robię wszystko to, czego ode mnie oczekują. A&nbsp;później zaczynam
        tworzyć DESIGN.
      </h3>
      <p>
        Studiuję grafikę na Wyższej Szkole Technicznej w&nbsp;Katowicach.
        Po&nbsp;kilku latach mogę powiedzieć, że&nbsp;nie żałuję zmiany branży z
        IT, która dała mi&nbsp;zawód informatyka, na&nbsp;grafikę/sztukę, która
        zawsze zostawała w&nbsp;tyle z&nbsp;róznych powodów. Wiedza IT na któraj
        bazuję codziennie była nieocenioną pomocą w&nbsp;ralizowaniu się jako
        grafik komputerowy. Znalazłam swoje miejsce i&nbsp;nie zamierzam się już
        nigdzie przeprowadzać.
        <br />
        Projektuję identyfikacje wizualne, plakaty, banery, wizytówki, okładki
        książek, księgi znaku, loga, grafiki 3D a&nbsp;najchętniej ilustracje.
        <br />
        Po godzinach zajmuję się szyciem ubrań, uprawiam jogę oraz uczę się
        francuskiego. Enchanté!
      </p>
    </AboutContainer>
  </SectionTemplateWhite>
);

AboutSection.propTypes = {
  id: PropTypes.string,
};

AboutSection.defaultProps = {
  id: 'about',
};

export default AboutSection;
