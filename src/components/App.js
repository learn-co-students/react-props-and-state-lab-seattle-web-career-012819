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

  onChangeType = (ev) => {
    this.setState({filters: {...this.state.filters, type: ev.target.value}
    });
  }

  onFindPetsClick = (ev) => {
    if (this.state.filters.type !== 'all')
    {fetch(`/api/pets?type=${this.state.filters.type}`)
    .then(res => res.json())
    .then(pets => this.setState({pets}));}
    else {
      fetch(`/api/pets`)
      .then(res => res.json())
      .then(pets => this.setState({pets}));
    }
  }

  onAdoptPet = id => {
    let neoPets = this.state.pets.map(pet => {
      return pet.id === id ? {...pet, isAdopted: true} : pet;
    });
    this.setState({pets: neoPets})
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
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
