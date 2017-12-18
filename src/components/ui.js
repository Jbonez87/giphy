// import React from 'react';
import styled from 'styled-components'

export const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: center;
  overflow: hidden;
  clear: both;
  background: ${props => props.background};
  overflow: hidden;
  clear: both;
`

export const NavBar = styled.nav`
  width: 100%;
  display: block;
  padding: 0 0 10px 0;
  background: ${props => props.background}
`

export const NavList = styled.ul`
  text-align: center;
`

export const NavItem = styled.li`
  cursor: pointer;
  width: 50px;
  padding: 10px;
  margin: 0 5px 0 0;
  color: rgb(255, 255, 255);
  transition: all .4s;
  &:hover {
    color: rgb(230, 234, 242);
  }
`

export const Header = styled.header`
  display: block;
  margin: 0 auto;
  padding: 25px;
  height: 120px;
  font-size: 3rem;
  font-family: 'Audiowide', cursive;
  color: white;
  background: ${props => props.background}
`

export const Title = styled.h1`
  padding: 10px;
  border: 3px solid ${props => props.border};
`

export const Name = styled.span`
  color: ${props => props.color}
`

export const Footer = styled.footer`
  background: ${props => props.background};
  color: ${props => props.color};
  font-size: 18px;
  display: block;
  padding: 10px;
  width: 100%;
  position: fixed;
  bottom: 0;
  overflow: hidden;
  clear: both;
`

export const SocialLink = styled.a`
  text-decoration: none;
  color: ${props => props.color};
`

export const ResultsContainer = styled.div`
  position: absolute;
  display: block;
  padding: 20px;
  margin: 0 0 30px 0;
  overflow: hidden;
  clear: both;
`

export const SearchItem = styled.li`
  list-style: none;
  display: inline;
  position: ${props => props.position};
  color: ${props => props.color || 'black'};
  padding: 5px;
  margin: ${props => props.margin || 0};
  border: ${props => props.border || 'none'};
`

export const SearchContainer = styled.div`
  padding: ${props => props.padding || '10px'};
  color: ${props => props.color || 'rgb(255, 255, 255)'};
  overflow: hidden;
  clear: both;
`

export const GifContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const Gif = styled.img`
  max-width: 300px;
  max-height: 300px;
`

export const FormContainer = styled.div`
  display: block;
  padding: 10px 0 20px 0;
  overflow: hidden;
  clear: both;
`

export const Form = styled.div`
  width: 500px;
  overflow: hidden;
  clear: both;
`

export const Input = styled.input`
  background: white;
  border: 2px solid rgba(79, 196, 233, 0.7);
  width: 300px;
  padding: 10px;
  margin: 10px;
  color: rgb(26, 26, 26);
`

export const Button = styled.button`
  padding: 10px;
  background: white;
  transition: all .4s;
  cursor: pointer;
  color: rgb(12, 177, 93);
  border: 2px solid rgb(12, 177, 93);
  &:hover {
    background: rgb(12, 177, 93);
    color: white;
  }
`

export const ResultCount = styled.span`
  text-align: center;
  display: ${props => props.display || ''};
  padding: 5px;
  margin-left: 10px;
  overflow: hidden;
  clear: both;
  color: black;
`
