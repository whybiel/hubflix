import React from "react";

import Axios from "axios"

const ApiFilms = Axios.create({
  baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=28440a19c8a5282c770fccf50ba63ae7&language=pt-BR&page=1"
})

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
      <div>
        <input
          type="text"
          placeholder="Digite o nome do filme..."
          onChange={this.filterFilms}
        />
        <h1>Filmes</h1>
        {this.state.FilmsFilter.map((item) => (
            <div>
              <h2 key={item.id}>{item.title}</h2>
                <img src={item.poster} alt={`Capa do filme: ${item.title}`} title={`${item.title}`}/>
            </div>
        ))}
      </div>
    )
  }
}