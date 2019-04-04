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

  onChangeType = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  onAdoptPet = (id) => {
    let newPet = this.state.pets.map(pet => {
      if (id === pet.id) {
        return {
          ...pet,
          isAdopted: 'true'
        }
      } else {
        return pet
      }
    })

    // let otherNewPet = this.state.pets.map( pet => {
    //   return id === pet.id ? {...pet, isAdopted: 'true'} : pet
    // })

    this.setState({
      pets: newPet
    })
  }



  onFindPetsClick = () => {
    let TYPE = this.state.filters.type
    let URL = ''
    if (TYPE === 'all') {
      URL = `/api/pets`
    } else {
      URL = `/api/pets?type=` + TYPE
    }
    fetch(URL)
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({
          pets: json
        })
      })
  }
  render() {
    return (
      <div className="ui container" >
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser filterPets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
