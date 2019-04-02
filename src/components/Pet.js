import React from 'react'

export default class Pet extends React.Component {
  symbol = () =>{
    if(this.props.pet.gender ==='male'){
      return '♂'
    } else{
      return '♀'
    }
  }

  render() {
    const pet = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.symbol()}
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {pet.isAdopted ?
              <button className="ui disabled button">Already adopted</button>
            : <button className="ui primary button" onClick={() => this.props.onAdoptPet(pet.id)}>Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}
