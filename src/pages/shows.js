import React from "react";
import Axios from "axios"
import styled from "styled-components";

const ApiShows = Axios.create({
    baseURL:"https://api.themoviedb.org/3/tv/popular?api_key=28440a19c8a5282c770fccf50ba63ae7&language=pt-BR"
})

const MegaBox = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`

const ContTop = styled.div`
  width:50%;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  margin:5vh 0 5vh 0;
`
const BtnTop = styled.button`
  width:5vw;
  height:5vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  font-family: 'Josefin Sans', sans-serif;
  font-size:1.2rem;
  padding:1vh 0.5vw 1vh 0.5vw; 
  background-color:orangered;
  border:none;
  position:fixed;
  top: 90vh;
  left:0vw;
`

const Search = styled.input`
  width:15vw;
  height:5vh;
  border:none;
  border-radius:5px;
  padding:0 0 0 1vw;
  color:#000;

  &:hover{
    box-shadow:0 0 5px 5px #FF4500;
  }
`

const Container = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  flex-direction:column;
`
const SubContainer = styled.div`
  width:70%;
  display:flex;
  flex-direction:column;
  margin:2vh 0 0 0;
  padding:1vh 2vw 1vh 2vw;
  cursor:pointer;

  &:hover{
    background-color: rgba(255, 255, 255, 0.1);
    border-radius:10px;
  }
`

const Title = styled.h2`
  font-size:2rem;
  font-family: 'Comfortaa', cursive;
  margin:1vh 0 2vh 0;
`
const ContImg = styled.div`
  width:80%;
  display:flex;
  text-align:rigth;
`
const Image = styled.img`
  width:20vw;
  height:45vh;
  margin:0vh 0 2vh 0;
`

const Descrition = styled.p`
  width:100%;
  font-size:1.3rem;
  text-align:justify;
  margin:2vh 0 0 0vw;
  font-family: 'Josefin Sans', sans-serif;
`
const Span = styled.span`
  background-color:#363636;
  padding:0.5vh 0.5vw;
  color:#00CD66;
  border-radius:5px;
`
const SubContImg = styled.div`
  width:100%;
  margin:2vh 0 0 3vw;
`
const Details = styled.details`
  margin:2vh 0 0 0vw;
  font-family: 'Josefin Sans', sans-serif;
`
const Sumary = styled.summary`
  font-size:1.3rem;
  font-family: 'Josefin Sans', sans-serif;
`
export default class Show extends React.Component{

  state={
    listShows: [],
    FilterShows: []
  }

  async componentDidMount(){
    this.getShows()
  }

  getShows = async () => {
    const response = await ApiShows.get()
    console.log(response)

    const Series = response.data.results.map((item) => {
      return{
        ...item,
        poster:`https://image.tmdb.org/t/p/w500/${item.poster_path}`
      }
    })
    this.setState({
      listShows: Series,
      FilterShows: Series
    })
  }  

    filterSeries = (e) => {
      const {listShows} = this.state
  
      if(e.target.value === ""){
        this.setState({
          FilterShows: listShows
        })
        return
      }
  
      const ShowConvert = listShows.filter((item) => {
        if (item.name.toLowerCase().includes(e.target.value.toLowerCase())){
          return true
        }
      })
  
      this.setState({
        FilterShows: ShowConvert
      })
  }

  render(){
    return(
      <MegaBox>
        <ContTop>
        <Title>Séries</Title>
        <Search id="#"
          type="text"
          placeholder="Digite o nome da série..."
          onChange={this.filterSeries}
        />
        </ContTop>
        <a href="#"><BtnTop>↑ TOPO</BtnTop></a>
        {this.state.FilterShows.map((item) => (
            <Container key={item.id}>
              <SubContainer>
                <Title>{item.name}</Title>
                <ContImg>
                  <Image src={item.poster} alt={`Capa do filme: ${item.title}`} title={`${item.title}`}/>
                  <SubContImg>
                    <Descrition>Nota: <Span>{item.vote_average}</Span></Descrition>
                    <Descrition>Votos: <Span>{item.vote_count}</Span></Descrition>
                    <Descrition>Data de Laçamento: <Span>{item.first_air_date}</Span></Descrition>
                    <Details>
                    <Sumary>Sinopse</Sumary>
                    <Descrition>{item.overview}</Descrition>
                  </Details>
                  </SubContImg>
                </ContImg>
              </SubContainer>
            </Container>
        ))}
      </MegaBox>
    )
  }
}
