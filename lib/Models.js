//Written by Elias Taye elias.taye25@gmail.com
//Model instances for the application
Activities = new Mongo.Collection("activities");
Companies = new Mongo.Collection("companies");
ActivityDetails = new Mongo.Collection("activityDetails");

//Activity (Category) Model Schema =======================================
var AvtivitySchema = new SimpleSchema({
  "activityName": {
    type: String,
    defaultValue: "",
    label: "Activity Name"
  }
});
Activities.attachSchema(AvtivitySchema);

//Activity Details Schema  =======================================
var ActivityDetailsSchema = new SimpleSchema({
  "activityName": {
    type: String,
    defaultValue: "",
    label: "Activity Name"
  },
  "startDate": {
    type: String,
    defaultValue: "",
    label: "Activity Start Date"
  },
  "endDate": {
    type: String,
    defaultValue: "",
    label: "Activity Start Date"
  },
  "companyName": {
    type: String,
    defaultValue: "",
    label: "Company Name"
  },
  "details": {
    type: String,
    defaultValue: "",
    label: "Note"
  }
});
ActivityDetails.attachSchema(ActivityDetailsSchema);

//Company Details Schema  =======================================
var CompanySchema = new SimpleSchema({
  "name": {
    type: String,
    defaultValue: "",
    label: "Company Name"
  },
  "telephone": {
    type: String,
    defaultValue: "",
    label: "Telephone"
  },
  "email": {
    type: String,
    defaultValue: "",
    label: "Email Address"
  },
  "address": {
    type: String,
    defaultValue: "",
    label: "Company Address"
  }
});
Companies.attachSchema(CompanySchema);
