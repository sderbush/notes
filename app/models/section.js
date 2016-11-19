import DS from 'ember-data';
let { attr } = DS;

export default DS.Model.extend({
  title: attr(),
  description: attr()
});
