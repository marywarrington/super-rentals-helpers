import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },
    save4() {
      var params = {
        message: this.get('message'),
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('save5', params);
    }
  }
});
