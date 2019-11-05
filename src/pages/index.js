import React from 'react';
import { colors } from 'utils';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import Navigation from 'components/Navigation';
import HeroSection from 'components/HeroSection';
import AboutSection from 'components/AboutSection';
import PostersSection from 'components/PostersSection';
import IllustrationsSection from 'components/IllustrationsSection';
import LogosSection from 'components/LogosSection';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${colors.light};
    color: ${colors.dark};
  }
`;

const StyledSectionsWrapper = styled.div`
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Helmet>
          <html lang="en" />
          <title>Kasia Michalska portfolio</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Some content." />
        </Helmet>
        <GlobalStyle />
        <Navigation />
        <StyledSectionsWrapper>
          <HeroSection />
          <AboutSection />
          <PostersSection />
          <IllustrationsSection />
          <LogosSection />
        </StyledSectionsWrapper>
      </>
    );
  }
}
