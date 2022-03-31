import React from "react"
import styled from "styled-components"
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from "react-router-dom"


import Home from "./pages/home"
import Filmes from "./pages/movies"
import Series from "./pages/shows"


const Navbar = styled.nav`

`
const List = styled.ul`

`
const Item = styled.li`

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
                  <Link to="filmes">Filmes</Link>
              </Item>
              <Item>
                  <Link to="series">Séries</Link>
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