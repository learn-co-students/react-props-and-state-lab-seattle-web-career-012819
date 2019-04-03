import React from 'react'

class Pet extends React.Component {
  adoptPet = (e) => {
    console.log("PET ID", this.props.petInfo.id)
    this.props.onAdoptPet(this.props.petInfo.id)
    this.forceUpdate()
  }

  render() {
    // console.log("RERENDERING PET", this.props.petInfo)
    const isAdopted = this.props.petInfo.isAdopted
    const adopt = isAdopted ? 'none' : 'initial'
    const alreadAdopted = isAdopted ? 'initial' : 'none'
    const sex = this.props.petInfo.gender === 'male' ? '♂' : '♀'
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.petInfo.name} {sex}
          </a>
          <div className="meta">
            <span className="date">{this.props.petInfo.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petInfo.age}</p>
            <p>Weight: {this.props.petInfo.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button" style={{display: alreadAdopted}}>Already adopted</button>
          <button 
            className="ui primary button" 
            style={{display: adopt}}
            onClick={this.adoptPet}
          >Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
