import React, { Component } from 'react';
import styled from 'styled-components';
import SearchForm from './components/SearchForm';

const mainThemes = {
  colors: ['rgba(79, 196, 233, 0.7);', 'rgb(7, 60, 98);', 'rgb(255, 255, 255);'],
}

const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: center;
  overflow: hidden;
  clear: both;
  background: ${props => props.background}
`;

const Header = styled.header`
  display: block;
  margin: 0 auto;
  padding: 25px;
  font-size: 3rem;
  font-family: 'Audiowide', cursive;
  color: white;
  background: ${props => props.background}
`;

const Title = styled.h1`
  padding: 10px;
  border: 3px solid ${props => props.border};
`;

const Name = styled.span`
  color: ${props => props.color}
`;

const Footer = styled.footer`
  background: ${props => props.background}
  color: ${props => props.color}
  font-size: 18px;
  padding: 10px;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: ${props => props.color};
`;

class App extends Component {
  render() {
    return (
      <Container background={mainThemes.colors[0]}>
        <Header background={mainThemes.colors[0]}>
          <Title border={mainThemes.colors[2]}>Welcome to <Name 
              color={mainThemes.colors[1]}
            >
              GiphySearch
            </Name>
          </Title>
        </Header>
        <SearchForm />
        <Footer 
          background={mainThemes.colors[0]}
          color={mainThemes.colors[1]}
        >
          <p>
            &copy; GiphySearch {new Date().getFullYear()} | Powered By GIPHY | Made with &hearts; by <SocialLink
                color={mainThemes.colors[2]}
                href="https://www.linkedin.com/in/john-castrillon-a50141b8/"
                rel="noopener noreferrer"
                target="_blank"
              >
              John Castrillon
            </SocialLink>
          </p>
        </Footer>
      </Container>
    );
  }
}

export default App;
