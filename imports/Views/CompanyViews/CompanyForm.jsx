//Written by Elias Taye elias.taye25@gmail.com
//UI component for registering new company
import React, { Component } from 'react';

export default class CompanyForm extends Component{

    onFormSubmit(event){
      event.preventDefault();
      const compName = this.refs.company.value;
      if (compName==''){        //Validating input value
          alert("Please enter company name");
          return ;
      }
      this.props.onFormSubmit(compName);
      this.refs.company.value="";
    }
    render(){
      return(
              <div>
                  <hr/>
                  <h2>New Company</h2>
                  <form className="form-inline" onSubmit={this.onFormSubmit.bind(this)}>
                    <input type="text" ref="company" placeholder="Company name" />
                    <input type="submit" value="Add"/>
                  </form>
                  <br/>
                  <hr/>
              </div>
            )
      }
}
