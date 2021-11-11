import React, { Component } from 'react';

 class FullNameprops extends Component {
  render() {
    return (
      <div>
      <h1 className={this.props.className} >My name is {this.props.name} </h1>
      <p> {this.props.children}
      </p>
      
      </div>
    )
  }
}

export default FullNameprops;

