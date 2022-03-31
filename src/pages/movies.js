import React from "react";

import Axios from "axios"

const ApiFilms = Axios.create({
  baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=28440a19c8a5282c770fccf50ba63ae7&language=pt-BR&page=1"
})

export default class Movie extends React.Component{

  state={
    listFilmes: [""],
  }

  async componentDidMount(){
    const response = await ApiFilms.get()
    console.log(response.data.results)

    const filmes = response.data.results.map((item) => {
      return{
        ...item,
        poster:`https://image.tmdb.org/t/p/w500/${item.poster_path}`
      }
    })

    this.setState({
      listFilmes: filmes
    })
  }

  render(){
    return(
      <div>
        <h1>Filmes</h1>
        {this.state.listFilmes.map((item) => (
            <div>
              <h2>{item.title}</h2>
                <img src={item.poster} alt={`Capa do filme: ${item.title}`} title={`${item.title}`}/>
            </div>
        ))}
      </div>
    )
  }
}