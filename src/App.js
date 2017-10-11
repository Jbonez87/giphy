import React from 'react';
import { 
  Container, 
  Header, 
  Title, 
  Name, 
  Footer, 
  SocialLink 
} from './components/ui'
import SearchForm from './components/SearchForm';

const mainThemes = {
  colors: ['rgba(79, 196, 233, 0.7);', 'rgb(7, 60, 98);', 'rgb(255, 255, 255);'],
}

const App = () => {
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

export default App;
