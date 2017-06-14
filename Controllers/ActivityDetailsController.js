//Written by Elias Taye elias.taye25@gmail.com
//Controller Class for ActivityDetails data related use cases
import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import '../lib/Models.js';
import Display from '../imports/Views/ActivityDetailsViews/Display';
import ActivityDetailsForm from '../imports/Views/ActivityDetailsViews/ActivityDetailsForm';

export default class App extends TrackerReact(Component){
    //All Interactions with the Models will take place in here
    //So that all the views' requests can be handeled
    getCompanyList(){
      return Companies.find().fetch();
    }

    deleteThisActivity(e) {
      ActivityDetails.remove(this.props.actList._id);
    }
    getActivityTypeList(){
      return Activities.find().fetch()
    }

    getActivityDetailsList(){
      return ActivityDetails.find().fetch()
    }

    insertAvtivityDetail(activityName, startDate, endDate, companyName, details){
      ActivityDetails.insert({
        activityName: activityName,
        startDate: startDate,
        endDate: endDate,
        companyName: companyName,
        details: details
      });
    }

    getCompanyList(){
      return Companies.find().fetch();
    }
    render(){
      let actList = this.getActivityDetailsList();
      var  rows = [];
      if (actList.length < 1){
        return (<div>loading...</div>)
      }
      //Start building all registered views details
      this.getCompanyList().map((company)=>{
        this.getActivityDetailsList().map((activityDetails)=>{
            if(company.name == activityDetails.companyName){
                rows.push(<CompanyRow key={company._id} name={company.name} />);        //writing {company name} with home there is at least one activity
                //writing activities that belongs to the current company on the map
                rows.push( <Display key={activityDetails._id} actList={activityDetails} triggerDelete={this.deleteThisActivity}/>);
            }
        })
      });
      return (
          <div className="container">
              <h1>Activity Details</h1>
              <table className="table table-striped">
                  <thead>
                    <tr>
                        <th className="col-md-1">Name</th>
                        <th className="col-md-1">Start Date</th>
                        <th className="col-md-1">End Date</th>
                        <th className="col-md-1">Company</th>
                        <th className="col-md-1">Details</th>
                        <th className="col-md-1">Maintain</th>
                    </tr>
                  </thead>
                  <tbody>
                        {rows}      {/* displaying the contents of the array */}
                  </tbody>
             </table>
             <hr/>
                <ActivityDetailsForm onFormSubmit={this.insertAvtivityDetail} companyList={this.getCompanyList} actTypeList={this.getActivityTypeList} />
          </div>
      );
    }
}

class CompanyRow extends React.Component {   //a component that spans or clears off the column and place Company name
  render() {
    return <tr><td colSpan="6"><strong>Company: <span className="text-primary">{this.props.name}</span></strong></td></tr>;
  }
}
