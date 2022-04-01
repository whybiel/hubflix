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


/* Header */
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    color:white;
  }
  body{
    background-color:#1C1C1C;
  }
  ::-webkit-scrollbar{
    width:5px;
  }
  ::-webkit-scrollbar-track{
    background:#1C1C1C;
  }
  ::-webkit-scrollbar-thumb{
    width:2px;
    background: #fff;
    border-radius: 30px;
  }
`
const Navbar = styled.nav`
  width:100%;
  height:9vh;
  background-color:#fff;
  border-bottom:1px solid white;
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
  background-color:#000;
  padding:0.5vw 0.5vh;
  border-radius:10px;
  text-decoration:none;
  position:absolute;
  left:2vw;
  color:#FF4500;
  font-weight:bold;
  box-shadow:0px 0px 5px 5px orangered;
  cursor:pointer;

  &:hover{
    color:#fff;
    box-shadow:none;
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