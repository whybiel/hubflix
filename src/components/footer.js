import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width:100%;
  height:20vh;
  background-color:#25284c;
  display:flex;
  align-items:center;
  justify-content:space-around;
  margin:10vh 0 0 0;
`
const Sub = styled.h3`
  font-size:1rem;
  color:white;
`
const Img = styled.img`
  width:2vw;
`
export default class Footer extends React.Component{
  render(){
    return(
      <Container>
          <Sub>© Copyright - Todos os direitos reservados.</Sub>
          <a href="https://www.instagram.com/" target="_blank"><Img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Ícone Instagram"/></a>
          <a href="https://www.facebook.com/" target="_blank"><Img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Ícone Facebook"/></a>
          <a href="https://www.youtube.com/" target="_blank"><Img src="https://cdn-icons-png.flaticon.com/512/174/174883.png" alt="Ícone YouTube"/></a>
          <a href="https://www.deezer.com/br/" target="_blank"><Img src="https://cdn-icons-png.flaticon.com/512/5968/5968803.png" alt="Ícone Deezer"/></a>
      </Container>
  )
  }
}
