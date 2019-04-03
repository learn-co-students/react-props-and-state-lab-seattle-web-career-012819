import React from 'react'

class Filters extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 'all'
    }
  }

  filterPetType = () => {
    const type = this.state.value
    console.log('Filter filterPetType type', type)
    this.props.onFindPetsClick(type)
  }

  selectPetType = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.selectPetType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button 
            className="ui secondary button"
            onClick={this.filterPetType}
          >Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
