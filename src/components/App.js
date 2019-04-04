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

  onChangeType = newType => {
    this.setState({
      filters: {type: newType}
    })
  }

  onFindPetsClick = () => {
    const current_type = this.state.filters.type
    let queryParam = ''
    if (current_type !== 'all') {queryParam = `?type=${current_type}`}
    fetch(`/api/pets${queryParam}`)
      .then(response => response.json())
      .then(json => this.setState({pets: json}))
  }

  onAdoptPet = (id) => {
    // w pet id, change pet's state to true
    const newPets = this.state.pets.map(pet => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet = {this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
