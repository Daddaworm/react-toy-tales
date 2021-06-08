import React, { Component } from 'react';

class ToyForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target.name, e.target.image)
    const name = e.target.name.value
    const image = e.target.image.value
    this.props.addToy(name, image)
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;



