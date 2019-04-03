import React from 'react'

class Filters extends React.Component {
  constructor(props) {
    super(props)
  }
  
  handleSubmit = () => {
    console.log('fired handleSubmit')
    this.props.onFindPetsClick()
  }

  handleChoice = (ev) => {
    console.log('fired handleChoice')
    this.props.onChangeType(ev.target.value)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleChoice}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleSubmit}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
