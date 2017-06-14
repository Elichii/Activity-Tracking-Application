//Written by Elias Taye elias.taye25@gmail.com 
//Controller Class for Activity Category related use cases
import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import '../lib/Models.js';

import Display from '../imports/Views/ActivityTypeViews/Display';
import ActivityForm from '../imports/Views/ActivityTypeViews/ActivityForm';

export default class Sample extends TrackerReact(Component){

    getActivityType(){       //Bring all Company Data from the Collection
      return Activities.find().fetch();
    }
    deleteActivityType(e) {      //Delete selected company
      Activities.remove(this.props.act._id);
    }
    insertActivityType(name){    //Insert new Company
        Activities.insert({
          activityName: name
        });
    }
    render(){
      let res = this.getActivityType();
      if (res.length < 1){    //if not loadded yet, render <div> to diplay loading
        return (<div>loading...</div>)
      }
      return (
              <div className="container">
                  <h1>Activity List</h1>
                  <ul>
                     {
                       this.getActivityType().map((activityType)=>{       //Map Company Collection (loop through)
                          return <Display key={activityType._id} triggerDelete={this.deleteActivityType} act={activityType} />      //Render display child component with sending a property
                       })
                     }
                  </ul>
                  <ActivityForm onFormSubmit={this.insertActivityType}/>      {/*Render Form child component with attaching callback function*/ }
               </div>

             );
      }
}
