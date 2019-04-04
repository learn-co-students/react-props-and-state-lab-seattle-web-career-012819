import React from 'react'

class Pet extends React.Component {
  handleAdoptButton = () => {
    // if pet isAdopted
    //   change alreadyadopted button's classname to 'ui primary button'
    console.log(this.props.pet.isAdopted)
    if (this.name === 'adopt-pet' && !this.props.pet.isAdopted) {
      console.log('can adopt')
      this.className = 'ui disabled button'
    } else if (this.name === 'already-adopted' && this.props.pet.isAdopted) {
      console.log('cant adopt')
      this.className = 'ui disabled button'
    }
    // if (this.props.pet.isAdopted) {
    //   this.name == 'adopt-pet' ? console.log('adopt a pet') : console.log(this.className)
    // }
  }

  toggleAdopted = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
            {this.props.pet.gender === 'male' ? '♂':'♀'}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {
            this.props.pet.isAdopted ?
              <button
                className="ui disabled button"
                name="already-adopted"
                onClick={this.handleAdoptButton}
              >
                Already adopted
              </button>
            :
              <button
                className="ui primary button"
                name="adopt-pet"
                onClick={this.toggleAdopted}
              >
                Adopt pet
              </button>
        }
        </div>
      </div>
    )
  }
}

export default Pet

// {
//   id: '5c142d9e-ea45-4231-8146-cccf71c704c0',
//   type: 'dog',
//   gender: 'male',
//   age: 4,
//   weight: 1,
//   name: 'Trident',
//   isAdopted: false,
// },
