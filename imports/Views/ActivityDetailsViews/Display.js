//Written by Elias Taye elias.taye25@gmail.com
//Activity Details Display UI component for displaying all avainlabe Activity Details 
import React, { Component } from 'react';

export default class Display extends Component{

  render(){
    return (
            <tr>
               <td>{this.props.actList.activityName}</td>
               <td>{this.props.actList.startDate}</td>
               <td>{this.props.actList.endDate}</td>
               <td>{this.props.actList.companyName}</td>
               <td>{this.props.actList.details}</td>
               <td>
                 <a href="#" className="delete" onClick={this.props.triggerDelete.bind(this)}>Delete</a> |
                 <a href="#" className="update-activity">update</a>
                </td>
            </tr>
    );
  }
}
