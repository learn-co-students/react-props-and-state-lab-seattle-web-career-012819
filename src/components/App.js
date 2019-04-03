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

  handleChangeType = (type) => {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  handleFindPetsClick = () => {
    let filterURL = "/api/"
    let filterURLExtension;
    if (this.state.filters.type === 'all') {
      filterURLExtension = "pets"
    } else if (this.state.filters.type === 'cat') {
      filterURLExtension = "pets?type=cat"
    } else if (this.state.filters.type === 'dog') {
      filterURLExtension = "pets?type=dog"
    } else if (this.state.filters.type === 'micropig') {
      filterURLExtension = "pets?type=micropig"
    }

    fetch(filterURL + filterURLExtension)
    .then(results => {
      return results.json()
    })
    .then(json => {
      let pets = []
      json.forEach((pet) => {
        pets.push(pet)
      })
      this.setState({pets: pets})
    })
    .catch(console.log)
  }

  handleAdoptPetClick = (id) => {
    const pet = this.state.pets.find((pet) => {
      return pet.id === id;
    })
    pet.isAdopted = true
    this.setState({
      pets: this.state.pets
      
    })
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
                onChangeType={this.handleChangeType}
                onFindPetsClick={this.handleFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                onAdoptPet={this.handleAdoptPetClick}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
