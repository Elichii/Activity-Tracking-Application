//Written by Elias Taye elias.taye25@gmail.com
//Router Configuration for all available routes
import { mount } from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx';
import React, { Component } from 'react';
import App from '../Controllers/ActivityDetailsController';
import ActivityController from '../Controllers/ActivityController';
import CompanyController from '../Controllers/CompanyController';

FlowRouter.route('/',{   //routes to Activity Details Controller Component
    action(){
        mount(MainLayout, {
          content: (<App />
          )
        })
    }
});
FlowRouter.route('/activity',{
    action(){
        mount(MainLayout, {
          content: (<ActivityController />    //routes to Activity Type Controller Component
          )
        })
    }
});
FlowRouter.route('/company',{
    action(){
        mount(MainLayout, {
          content: (<CompanyController />     //routes to Company Controller Component
          )
        })
    }
});
