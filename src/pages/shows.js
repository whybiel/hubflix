import React from "react";
import Axios from "axios"

const ApiShows = Axios.create({
    baseURL:"https://api.themoviedb.org/3/tv/popular?api_key=28440a19c8a5282c770fccf50ba63ae7&language=pt-BR"
})

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
      <div>
        <input
          type="text"
          placeholder="Digite o nome do filme..."
          onChange={this.filterSeries}
        />
        <h1>Séries</h1>
        {this.state.FilterShows.map((item) => (
            <div>
              <h2>{item.name}</h2>
              <img src={item.poster} alt={`Capa do filme: ${item.name}`} title={`${item.name}`}/>
            </div>
        ))}
      </div>
    )
  }
}