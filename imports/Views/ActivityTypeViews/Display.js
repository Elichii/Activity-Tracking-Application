//Written by Elias Taye elias.taye25@gmail.com
//UI component for displaying all registered Activity Types 
import React, { Component } from 'react';

export default class Display extends Component{
  render(){
      return (
               <li>
                    {this.props.act.activityName}
                    <br/>
                    <a href="#" className="delete" onClick={this.props.triggerDelete.bind(this)}>Delete</a> |
                    <a href="#" className="update-activity">update</a>
               </li>

             );
          }
}
