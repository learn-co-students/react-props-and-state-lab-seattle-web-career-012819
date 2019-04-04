import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  render() {
    let allPets = this.props.pets.map(pet => {
      return <Pet onAdoptPet={this.props.onAdoptPet} key={pet.id} pet={pet} />;
    });

    return <div className="ui cards">{allPets}</div>;
  }
}

export default PetBrowser;
