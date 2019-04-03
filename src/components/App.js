import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  componentDidMount() {
    this.onFindPetsClick('all')
  }

  onFindPetsClick = () => {
    
    let url = "/api/pets"
    if (this.state.filters.type !== 'all') url += `?type=${this.state.filters.type}`
    httpRequest(url)
      .then(r => r.json())
      .then(pets => {
        this.setState({ 
          pets: pets, 
        })
      })
      .catch(err => console.log(err))
  }

  onClickChangeType = (type) => {
    this.setState({ filters: { type }}, this.onFindPetsClick)
  }

  adoptPet = (id) => {
    // console.log("ADOPT PET:", id)
    const newPets = this.state.pets.map(pet => {
      if (pet.id === id) {
        // console.log("PET", pet.name)
        return Object.assign({}, pet, { isAdopted: true })
      } else return pet
    })
    this.setState({
      pets: newPets
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
                onFindPetsClick={this.onClickChangeType}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                onAdoptPet={this.adoptPet}
                pets={this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

function httpRequest(url, method='GET', data={}) {
  const init = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: method,
    body: JSON.stringify(data)
  }
  if (method.toLowerCase() === 'get') delete init.body;
  else if (method.toLowerCase() === 'post' && init.body.id) delete init.body.id;

  return fetch( url, init);
}