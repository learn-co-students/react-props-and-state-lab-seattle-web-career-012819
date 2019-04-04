import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adopted: false,
      filters: {
        type: "all"
      }
    };
  }

  onChangeType = event => {
    this.setState({
      filters: { ...this.state.filters, type: event.target.value }
    });
  };

  onFindPetsClick = () => {
    if (this.state.filters.type !== "all") {
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(resp => resp.json())
        .then(pets =>
          this.setState({
            pets
          })
        );
    } else {
      fetch("/api/pets")
        .then(resp => resp.json())
        .then(pets =>
          this.setState({
            pets
          })
        );
    }
  };

  onAdoptPet = id => {
    let pets = this.state.pets.map(petToChange => {
      return petToChange.id === id
        ? { ...petToChange, isAdopted: true }
        : petToChange;
    });

    this.setState({ pets });
  };

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
                onFindPetsClick={this.onFindPetsClick}
                onChangeType={this.onChangeType}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
