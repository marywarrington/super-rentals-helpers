import Ember from 'ember';
import FirebaseAdapter from 'emberfire/adapters/firebase';

const { inject } = Ember;

export default FirebaseAdapter.extend({
  firebase: inject.service(),
}); //adapters connect our applications to their data stores.  This code is creating an adapter specifically meant for connecting to Firebase.  It uses Ember's service injection mechanism to inject it into the application.  often we won't add any code to our adapters 
