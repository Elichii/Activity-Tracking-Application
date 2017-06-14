//Written by Elias Taye #641-451-5388
//Controller Class for Company related use cases
import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import '../lib/Models.js';
import Display from '../imports/Views/CompanyViews/Display';
import CompanyForm from '../imports/Views/CompanyViews/CompanyForm';

export default class CompanyController extends TrackerReact(Component){

    getCompanyData(){       //Bring all Company Data from the Collection
      return Companies.find().fetch();
    }
    deleteCompany(e) {      //Delete selected company
      Companies.remove(this.props.comp._id);
    }
    insertCompany(name){    //Insert new Company
        Companies.insert({
          name: name
        });
    }
    render(){
      let res = this.getCompanyData();
      if (res.length < 1){    //if not loadded yet, render <div> to diplay loading
        return (<div>loading...</div>)
      }
      return (
              <div className="container">
                  <h1>Company List</h1>
                  <ul>
                     {
                       this.getCompanyData().map((company)=>{       //Map Company Collection (loop through)
                          return <Display key={company._id} triggerDelete={this.deleteCompany} comp={company} />      //Render display child component with sending a property
                       })
                     }
                  </ul>
                  <CompanyForm onFormSubmit={this.insertCompany}/>      {/*Render Form child component with attaching callback function*/ }
               </div>
             );
      }
}
