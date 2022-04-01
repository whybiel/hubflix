import React from "react";
import styled from "styled-components";
import Axios from "axios"

const ApiFilms = Axios.create({
  baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=28440a19c8a5282c770fccf50ba63ae7&language=pt-BR&page=1"
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

export default class Movie extends React.Component{

  state={
    listFilmes: [],
    FilmsFilter:[]
  }

  async componentDidMount(){
    this.getFilms()
  }

  getFilms = async () => {
    const response = await ApiFilms.get()
    console.log(response.data.results)

    const filmes = response.data.results.map((item) => {
      return{
        ...item,
        poster:`https://image.tmdb.org/t/p/w500/${item.poster_path}`
      }
    })

    this.setState({
      listFilmes: filmes,
      FilmsFilter:filmes
    })
  }

  filterFilms = (e) => {
    const {listFilmes} = this.state

    if(e.target.value === ""){
      this.setState({
        FilmsFilter: listFilmes
      })
      return
    }

    const FilmsConvert = listFilmes.filter((item) => {
      if (item.title.toLowerCase().includes(e.target.value.toLowerCase())){
        return true
      }
    })

    this.setState({
      FilmsFilter: FilmsConvert
    })
  }

  render(){
    return(
      <MegaBox>
        <ContTop>
        <Title>Filmes</Title>
        <Search
          type="text"
          placeholder="Digite o nome do filme..."
          onChange={this.filterFilms}
        />
        </ContTop>
        {this.state.FilmsFilter.map((item) => (
            <Container key={item.id}>
              <SubContainer>
                <Title>{item.title}</Title>
                <ContImg>
                  <Image src={item.poster} alt={`Capa do filme: ${item.title}`} title={`${item.title}`}/>
                  <SubContImg>
                    <Descrition>Nota: <Span>{item.vote_average}</Span></Descrition>
                    <Descrition>Votos: <Span>{item.vote_count}</Span></Descrition>
                    <Descrition>Data de Laçamento: <Span>{item.release_date}</Span></Descrition>
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