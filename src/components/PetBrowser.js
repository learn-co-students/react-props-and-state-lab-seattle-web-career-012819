import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    // console.log("PROPS", this.props)
    const pets = this.props.pets.map((pet, i) => {
      return (
        <Pet 
          key={i}
          petInfo={pet} 
          onAdoptPet={this.props.onAdoptPet}
        />
      )
    })
    return (
      <div className="ui cards">{pets}</div>
    )
  }
}

export default PetBrowser
