//Written by Elias Taye elias.taye25@gmail.com
//UI component for displaying all registered Company records
import React, { Component } from 'react';

export default class Display extends Component{
  render(){
      return (
                <div className="container">
                   <li>
                       {this.props.comp.name}
                       <br/>
                       <a href="#" id={this.props.comp._id} className="delete" onClick={this.props.triggerDelete.bind(this)}>Delete</a> |
                       <a href="#" className="update-activity">update</a>
                   </li>
                </div>
             );
    }
}
