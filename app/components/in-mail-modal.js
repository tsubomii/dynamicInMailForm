import Component from '@ember/component';
import { computed, get } from '@ember/object';

export default Component.extend({
    //uiMetadata: service(),
  name: 'in-mail-modal',
  fields: computed('uiConfigs', function() {
    return get(this, 'uiConfigs.fields');
  }),
  init() {
    this._super(...arguments);
  }
});
