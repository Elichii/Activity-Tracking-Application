import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../Controllers/ActivityDetailsController';

Meteor.startup(()=>{
  //render(<App />,document.getElementById('render-target'));
});
