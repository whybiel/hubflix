import React from "react"
import styled from "styled-components"
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from "react-router-dom"
import { createGlobalStyle } from "styled-components"

import Home from "./pages/home"
import Filmes from "./pages/movies"
import Series from "./pages/shows"

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`
const Navbar = styled.nav`
  width:100%;
  height:9vh;
  color:#000;
`
const StyleLink = styled(Link)`
  color:#000;
  text-decoration:none;

  &:hover{
    color:#FF4500;
    font-weight:bold;
  }
`
const List = styled.ul`
  width:100%;
  height:100%;
  display: flex;
  justify-content:space-evenly;
  align-items:center;
  list-style:none;
`
const Item = styled.li`
  font-size:1.5rem;
  color:#000;
  text-decoration:none;
  font-family: 'Comfortaa', cursive;
  
  &:hover{
    margin-bottom:0.3vh;
    transform:scale(1.1);
  }
`

const Title = styled.li`
  font-size:2rem;
  font-family: 'Lobster', cursive;
  color:#fff;
  background-color:#000;
  padding:0.5vw 0.5vh;
  border-radius:10px;
  text-decoration:none;
  position:absolute;
  left:2vw;

  &:hover{
    color:#FF4500;
    font-weight:bold;
  }
`

export default class Nav extends React.Component{
  render(){
    return(
      <Router>
        <GlobalStyle/>
        <Navbar>
          <List>
              <Title>HubFlix</Title>
              <Item>
                  <StyleLink to="/">Home</StyleLink>
              </Item>
              <Item>
                  <StyleLink to="filmes">Filmes</StyleLink>
              </Item>
              <Item>
                  <StyleLink to="series">Séries</StyleLink>
              </Item>
          </List>
      </Navbar>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/filmes" element={<Filmes/>}/>
          <Route path="/series" element={<Series/>}/>
      </Routes>
  </Router>
    )
  }  
  
}