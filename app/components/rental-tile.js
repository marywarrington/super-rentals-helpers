import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
//this is where the value of the image show method comes from.  since it will be hidden, at first it will be false.

//when the show image button is clicked the image show action will run; this will set the isimageshowing from false to true. when this is true, the if statement in the hbs will display our image.

//added the image hide function to the actions the action helper is located in the image tag, so that when the user clicks the image it will set the image showing state to false.


//added the delete function to the actions.  when triggered, the delete action will display a confirmation pop-up. if confirmed it will send the action destroyRental upwards.

// it is super important to remember that:
//ONLY ROUTE HANDLERS MAY CREATE DELETE OR UPDATE OBJECTS IN THE DATA STORE!!!!!!

//the component can't delete the object itself; it sends a notification of intent by calling the this.sendAction function.  In the function's argument we provide the name of the function on the template and route handler we want to activate, and the specific rental we want that to happen to.

// ember follows the paradigm, data down, actions up.  data is passed downwards from the route, to the template, and into the component, actions get passed back up in a similar fashion.  So the command is sent up to the template and it must know how to handle that.  so we will call it on the same line that we use to call that component. 
