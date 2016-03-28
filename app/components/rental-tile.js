import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    }
  }
});
//this is where the value of the image show method comes from.  since it will be hidden, at first it will be false.

//when the show image button is clicked the image show action will run; this will set the isimageshowing from false to true. when this is true, the if statement in the hbs will display our image.

//added the image hide function to the actions the action helper is located in the image tag, so that when the user clicks the image it will set the image showing state to false.
