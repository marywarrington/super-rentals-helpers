import Ember from 'ember';

export default Ember.Route.extend({
  model() {  //the same as writing model: function()
    return this.store.findAll('rental'); //step 2: -this.store.findAll('rental') here we modify the route to find method.  we specify this.store to refer to the Firebase data store that we set up.  Then we run the findAll method with the argument rental; this instructs Ember Data to find all records fo the type rental in the store and return the to our application.  step 1: -return rentals- a method within an Ember class is called a hook.  Here is a model hook added to our index route handler.  the hook returns an array of hard coded property rentals
  },
});

//the index.hbs template will read this as the model property. model data in a route handler is available to the templates and components that correspond to that route.  The index.hbs can display this model data because the data is within its context.


// okay, so I'm writing about this in here because I don't know how to comment out the hbs file.  just like angular we are running a for each loop in the html.  okay, cool.  Whatever.  This is an example of what we're doing. Maybe this is the new norm?
// <ul>
//   {{#each model as |rental|}}
//      <li>{{rental.owner}}'s {{rental.type}} in {{rental.city}}</li>
//   {{/each}}
// </ul>
//we are looping through the model hook and we are labeling each object in that mofo 'rental' and then we are calling the object properties and listing them out.

//so we just added a rental-tile component.  Now this looks similar to angular where we nest the various components and display different html stuff.  we changed the for loop above to:
// <ul>
//   {{#each model as |rental|}}
//     <li>{{rental-tile rental=rental}}</li>
//   {{/each}}
// </ul>
// so we are still looping through the model and assigning the variable name rental to it.  variable names on the left of the equals refer to the name used within the component; on the right is the object we're assigning that variable name to.
