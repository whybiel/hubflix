import React from "react"
import styled from "styled-components"

import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from "react-router-dom"

import Home from "./home"
import Album from "./Album/album"
import Contato from "./Contato/contact"

const Navbar = styled.nav`
  width:100%;
  height:10vh;
  display:flex;
  justify-content:center;
  align-items:center;
`
const List = styled.ul`
  width:50vw;
  display:flex;
  justify-content:space-between;
  list-style:none;
`
const Item = styled.li`
  font-size:2rem;
  

  &:hover{
      cursor:pointer;
  }
`

export default class Nav extends React.Component{
  render(){
    return(
      <Router>
        <Navbar>
          <List>
              <Item>
                  <Link to="/">Home</Link>
              </Item>
              <Item>
                  <Link to="sobre">Sobre</Link>
              </Item>
              <Item>
                  <Link to="contato">Contato</Link>
              </Item>
          </List>
      </Navbar>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<Album/>}/>
          <Route path="/contato" element={<Contato/>}/>
      </Routes>
  </Router>
    )
  }  
  
}