import Ember from 'ember';

//model (now in rentals.json and imported into database)

//this is the same as writing model:function()
//method = hook
//accesses data model in firebase

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  },
//info is passed up from index.hbs, here is where we actaully destroy the rental
  action: {
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTO('index');
    }
  }
});
