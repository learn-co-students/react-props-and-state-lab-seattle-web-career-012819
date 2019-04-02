import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  updateFilter = (newType) =>{
    this.setState({
      filters: {
        type: newType
      }
    })
  }

fetchPets =() => {
  let query;
  if(this.state.filters.type ==='all'){
     query = '/api/pets'
  } else {
     query = `/api/pets?type=${this.state.filters.type}`
  }
  fetch(`${query}`)
  .then(resp => resp.json())
  .then(result => {
    this.setState({
      pets: result
    })
  })
}

adoptPet = (petId) =>{
  const newPets = this.state.pets.map(pet=>{
      return pet.id === petId ?{...pet, isAdopted: true} : pet
  })
  this.setState({pets: newPets})
}
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.updateFilter} onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.adoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
