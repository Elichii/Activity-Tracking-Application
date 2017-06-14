import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

    return Meteor.methods({
      removeAll(){
        console.log("removed");
        Activities.remove({});
        Companies.remove({});
        ActivityDetails.remove({});
      }
    })
});
