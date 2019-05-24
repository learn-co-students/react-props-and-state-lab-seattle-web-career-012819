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

  onChangeType = (animal) => {
    this.setState({
      filters: {
      ...this.state.filters,
        type: animal
      }
    }, () => this.onFindPetsClick())
    
  }

  onFindPetsClick = () => {
    let endpoint = '/api/pets';
    console.log(this.state.filters.type)
    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }
    console.log(endpoint)
    fetch(endpoint)
      .then(res => res.json())
      .then(pets => this.setState({ pets }, () => console.log(this.state.pets)));
  }

  onAdoptPet = (animalId) => {
    console.log("I want to be adopted")

    let adoptedAnimal = this.state.pets.filter(animal => {
      return animalId === animal.id
    })

    let index = this.state.pets.indexOf(adoptedAnimal[0])
    let changeAdoption = {...this.state.pets[index]}
    console.log(adoptedAnimal[0] + " is at index " + index)
    console.log(changeAdoption.isAdopted)
    
    changeAdoption.isAdopted = true
    console.log(changeAdoption.isAdopted)

    let newPetState = this.state.pets.slice()
    newPetState[index] = changeAdoption

    this.setState({
      pets: newPetState
    }, () => console.log(this.state.pets))
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App


//NOTES:

/*App
The app's initial state is already defined. App has two children: the <Filters /> and <PetBrowser /> components.

App should pass a callback prop, onChangeType, to <Filters />. This callback needs to update <App />'s state.filters.type

<Filters /> needs a callback prop, onFindPetsClick. When the <Filters /> component calls onFindPetsClick, <App /> should fetch a list of pets using fetch().

The URL of the API is /api/pets with an optional query parameter.
Use app's state.filters to control/update this parameter
If the type is 'all', send a request to /api/pets
If the type is 'cat', send a request to /api/pets?type=cat. Do the same thing for dog and micropig.
Finally set <App/>'s state.pets with the results of your fetch request so you can pass the pet data down as props to <PetBrowser />
Even though we're using fetch here, its responses have been mocked in order to make the tests work properly. That means it's important to use the exact URLs as described above, or your tests will fail!

The pet data received should include information on individual pets and their adoption status.

*/