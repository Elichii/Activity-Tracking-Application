//Written by Elias Taye elias.taye25@gmail.com 
//UI component for accepting new Activity Types
import React, { Component } from 'react';
import '../../../lib/Models.js';
export default class ActivityForm extends Component{

    onFormSubmit(event){
      event.preventDefault();
      const actTypeName = this.refs.activity.value;
      if (actTypeName == ''){        //Validating input value
          alert("Please enter Activity Type name");
          return ;
      }
      this.props.onFormSubmit(this.refs.activity.value);
      this.refs.activity.value="";
    }
    render(){
      return(
              <div>
                  <hr/>
                  <h2>New Activity</h2>
                  <form className="form-inline" onSubmit={this.onFormSubmit.bind(this)}>
                    <input type="text" ref="activity" placeholder="activity name" />
                    <input type="submit" value="Add"/>
                  </form>
                  <br/>
                  <hr/>
              </div>
            )
      }
}
