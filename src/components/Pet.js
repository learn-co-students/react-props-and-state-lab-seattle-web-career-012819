import React from 'react'

class Pet extends React.Component {

  determineStyling = () => {
    console.log(this.props.pet.isAdopted)
      if (this.props.pet.isAdopted) {
        return (
          <button className="ui disabled button">Already adopted</button>
        )
      } else {
        return(
        <button
        className="ui primary button"
        onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
        )
      }
      

    // return (
    //   <div className="extra content">

    //   <button 
    //   className={this.props.pet.isAdopted ? "ui primary button" : "ui default button"}
    //   display={this.props.pet.isAdopted ? "block" : "none"}
    //   >
    //   Already adopted
    //   </button>

    //   <button 
    //   className={this.props.pet.isAdopted ? "ui default button" : "ui primary button"}
    //   display={this.props.pet.isAdopted ? "none" : "block"}
    //   onClick={() => this.props.adoptPet(this.props.pet.id)}
    //   >
    //   Adopt pet
    //   </button>
    //   </div>

    // )
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
            {this.props.pet.name}
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
        {this.determineStyling()}
          {/* <button 
          className={this.props.pet.isAdopted ? "ui primary button" : "ui default button"}
          visibility={this.props.pet.isAdopted ? "visible" : "hidden"}
          >
          Already adopted
          </button>

          <button 
          className={this.props.pet.isAdopted ? "ui default button" : "ui primary button"}
          visibility={this.props.pet.isAdopted ? "hidden" : "visible"}
          onClick={() => this.props.adoptPet(this.props.pet.id)}
          >
          Adopt pet
          </button> */}
          {/* <button 
          className={!this.props.pet.isAdopted ? "ui primary button" : "ui default button"} onClick={!this.props.pet.isAdopted ? () => this.props.adoptPet(this.props.pet.id) : null}>
          {this.props.pet.isAdopted
          ? "Already adopted"
          : "Adopt pet"} 
          </button> */}

          {/* <button 
          className={this.props.pet.isAdopted ? "ui default button" : "ui primary button"}
          visibility={this.props.pet.isAdopted ? "hidden" : "visible"}
          onClick={() => this.props.adoptPet(this.props.pet.id)}
          >
          Adopt pet
          </button> */}

        </div>
      </div>
    )
  }
}

export default Pet
