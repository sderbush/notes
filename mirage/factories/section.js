import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) { return `Section ${i+1}`; },
  description() { return faker.lorem.paragraph(); }
});
