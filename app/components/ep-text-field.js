import Component from '@ember/component';
import { computed, get } from '@ember/object';

export default Component.extend({
  //uiMetadata: service(),
  name: 'ep-text-field',
  /*should document following configuratin, uiConfig data is metadata pass down from invoke component*/
  topMessage: computed('uiConfig', function() {
    return get(this, 'uiConfig.topMessage.label');
  }),
  bottomMessage: computed('uiConfig', function() {
    return get(this, 'uiConfig.bottomMessage.label');
  }),
  labelLeft: computed.equal('uiConfig.labelPosition', 'left'),
  labelRight: computed.equal('uiConfig.labelPosition', 'right'),
  bottomLink: computed('uiConfig', function() {
    return get(this, 'uiConfig.bottomLink');
  }),
  label: computed('uiConfig', function() {
    return get(this, 'uiConfig.label');
  }),
});
