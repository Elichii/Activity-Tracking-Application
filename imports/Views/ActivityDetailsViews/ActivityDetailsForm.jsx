//Written by Elias Taye elias.taye25@gmail.com 
//Activity Details UI component for accepting new Activity Details
import React, { Component } from 'react';
export default class ActivityDetailsForm extends Component{

  onFormSubmit(event){
      event.preventDefault();
      var activityName = this.refs.activityType.value;
      var startDate = this.refs.start.value.trim();
      var endDate = this.refs.end.value.trim();
      var companyName = this.refs.company.value;
      var details = this.refs.details.value.trim();

      this.props.onFormSubmit(activityName, startDate, endDate, companyName, details);
      this.refs.start.value="";
      this.refs.end.value="";
      this.refs.details.value="";
  }

  getCompanyData(){
    return this.props.companyList();
  }

  getActivityTypeData(){
    return this.props.actTypeList();
  }
    render(){
      let companyList = this.getCompanyData().map(company=>{
          return <option key={company._id} value={company.name}>{company.name}</option>
      });

      let activityTypeList = this.getActivityTypeData().map((activityType)=>{
          return <option key={activityType._id} value={activityType.activityName}>{activityType.activityName}</option>
      });
      return(
                <div className="container">
                  <form onSubmit={this.onFormSubmit.bind(this)}>
                          <h1>New Activity</h1>
                          <label>Select Activity Type</label>
                          <select className="form-control input-sm" ref="activityType">
                            {activityTypeList}
                          </select>
                          <br/>
                          <label>Activity Start Date & Time</label>
                          <input type="datetime-local" className="form-control" ref="start" placeholder="Activity Start Date/time" />
                          <br/>
                          <label>Activity End Date & Time</label>
                          <input type="datetime-local" className="form-control" ref="end" placeholder="Activity End Date/time" />
                          <br/>
                          <label>Select Company Name</label>
                          <select className="form-control input-sm" ref="company">
                            {companyList}
                          </select>
                          <br/>
                          <div>
                              <label>Breif description about this Activity</label>
                              <textarea rows="2"  className="form-control" cols="50" ref="details" placeholder="breif description"></textarea>
                          </div>
                          <div>
                            <br/>
                            <input className="btn btn-default" type="submit" />
                          </div>
                  </form>
                  <br/>
                  <br/>
                </div>
      )
    }
}
