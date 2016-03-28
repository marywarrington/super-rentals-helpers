import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr()
});
//this file is blueprint listing out attributes for what all the other rentals should have.  The DS stands for data store.  .attr stands for attribute.  This is a list that we want to save to our store for each rental that we add.  When a DS Model is exported we see in the line 'export default DS.Model.extend'({ it is added to the data store--saved to the database.