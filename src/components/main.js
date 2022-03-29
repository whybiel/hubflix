import React from "react"
import styled from "styled-components"

const Container = styled.div`
    width:100%;
    height:230vh;
`

const Container_Gg = styled.div`
    width:100%;
    heigth:75vh;
    display:flex;
    flex-direction:column;
    position:relative;
`
const Title_Gg = styled.h1`
    font-size:3rem;
    margin:15vh 0 0vh 43vw;
`
const Title2 = styled.h2`
    font-size:2.2rem;
    margin:7vh 0 10vh 41vw;
`
const Image = styled.img`
    width:40%;
    border-radius:10px;
    border:2px solid #fff;
    margin:0vh 0 0vh 3vw;
`
const Title3_Gg = styled.h3`
    margin:2vh 0 0vh 3vw;
`
const Text_Gg = styled.p`
    width:40%;
    font-size:1.5rem;
    position:absolute;
    top:45vh;
    left:50vw;
    text-align:justify;
`



const Container_M = styled.div`
    width:100%;
    height:75vh;
    display:flex;
    flex-direction:column;
    position:relative;
    margin:15vh 0 0vh 0;
`

const ImageM = styled.img`
    width:40%;
    border-radius:10px;
    border:2px solid #fff;
    margin:0vh 0vw 0vh 56vw;
`
const Text_M = styled.p`
    width:40%;
    font-size:1.5rem;
    position:absolute;
    top:25vh;
    left:9vw;
    text-align:justify;
`

const Title3_M = styled.h3`
    margin:2vh 0 0vh 56vw;
`


export default class Info extends React.Component{
    render(){
        return(
            <Container>
                <Container_Gg>
                <Title_Gg>Artistas:</Title_Gg>
                <Title2>Gloria Groove</Title2>
                <Image src="https://portalpopline.com.br/wp-content/uploads/2021/06/gloria-groove-bonekinha-videoclipe.jpg" alt="foto da gloria groove"/>
                <Title3_Gg>Álbuns: Alegoria, Lady Leste, Affair</Title3_Gg>
                <Text_Gg>Gloria Groove é cantora, dubladora e drag queen brasileira. Ainda com o nome de Daniel Garcia, começou a trabalhar na infância, e fez parte de uma das formações do 'Balão Mágico' em 2002. Em 2006, participou do quadro 'Jovens Talentos' do 'Programa Raul Gil', e seu talento chamou atenção: acabou escalado para a novela 'Bicho do Mato', da Record. Como dubladora, deu voz a diversos desenhos famosos, como 'Hannah Montana' e 'Digimon'. Como cantora de pop e funk, lançou diversos hits, entre eles 'Bumbum de Ouro', 'Arrasta' e 'YoYo'.</Text_Gg>
            </Container_Gg>
    
                <Container_M>
                <Title2>Matuê</Title2>
                <ImageM src="https://portalpopline.com.br/wp-content/uploads/2021/03/matue-3.jpg" alt="matue"/>
                <Title3_M>Álbuns: Máquina do Tempo</Title3_M>
                <Text_M>Matheus Brasileiro Aguiar nasceu em Fortaleza, capital do Ceará. Durante sua infância, aos oito anos de idade, se mudou com seus pais para Oakland, cidade localizada no estado da Califórnia, nos Estados Unidos. Ficando por quatro anos no país, conseguiu se tornar fluente em língua inglesa, até voltar para o Brasil em 2004.
    Estudando em escola pública, Matuê começou a ter contato e se interessar pelo mundo do Rap, mas ainda na sua adolescência passou por momentos difíceis após perder sua avó, que era uma pessoa que sempre apoiava ele. Ele começou a trabalhar como vendedor em uma loja de roupas de um shopping e depois de um tempo, aproveitando sua experiência com a língua inglesa, virou professor particular de inglês. Foi com esse emprego que ele conseguiu juntar um dinheiro para começar a investir na sua carreira musical.</Text_M>
                </Container_M>
            </Container>
            
        )
    }
       
} 
