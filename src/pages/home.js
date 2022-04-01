import React from "react";
import styled from "styled-components"

import Github from "./img/github.png"
import Instagram from "./img/instagram.png"
import Linkedin from "./img/linkedin.png"
import Whatsap from "./img/whatsapp.png"

const Container = styled.div`
    width:100%;
    height:91vh;
    background-color:#FF4500;
`
const Animation = styled.div`
    width:100%;
    height:82vh;
    background-color:#FF4500;
    animation: 3s back_ground ease;
    background-repeat:no-repeat;
    background-size:100% 100%;
    background-image:url("https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_1280.jpg");

    @keyframes back_ground{
        0%{
            background-position:0vw -100vh;
        },
        100%{
            background-position:0vw 0vh;
        }
    }
`

const Rodape = styled.div`
    width:100%;
    height:9vh;
    background-color:#fff;
    display:flex;
    align-items:center;
    justify-content:space-around;
`
const Images = styled.img`
    width:2vw;
`

export default class Home extends React.Component{

    render(){
        return(
            <Container>
                <Animation></Animation>
                <Rodape>
                    <a href="https://github.com/whybiel" target="_blank">
                    <Images src={Github} alt="Logo do github"/>
                    </a>
                    <a href="https://www.instagram.com/whybiel_/" target="_blank">
                    <Images src={Instagram} alt="Logo do instagram"/>
                    </a>
                    <a href="https://www.linkedin.com/in/gabriel-henrique-ferreira-de-moraes-3328831ab/" target="_blank">
                    <Images src={Linkedin} alt="Logo do linkedin"/>
                    </a>
                    <a href="https://wa.me/+5521987434106" target="_blank">
                    <Images src={Whatsap} alt="Logo do whatsapp"/>
                    </a>

                    <p>© Copyright. Todos os Direitos Reservados</p>
                </Rodape>
            </Container>
        )
    }
}