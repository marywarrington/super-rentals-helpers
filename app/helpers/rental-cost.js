import Ember from 'ember';

export function rentalCost(params) {
  var rentalPrice = params[0].get('cost');

  if (rentalPrice >= 1000) {
    return '$$$$'
  } else if (rentalPrice >= 500){
    return '$$$'
  } else if (rentalPrice >= 250){
    return '$$'
  } else {
    return '$'
  }
}

export default Ember.Helper.helper(rentalCost);
