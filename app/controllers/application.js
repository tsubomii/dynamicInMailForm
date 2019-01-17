import Controller from '@ember/controller';
import { get, set } from '@ember/object';

export default Controller.extend({
  //uiMetadata: service(),

  //custom property components should be rendered in this page
  customComponents: null,
  init() {
    this._super(...arguments);
    set(this, 'customComponents', [{
      locationKey: 'form-userdetail-inMail',
      componentName: 'in-mail-modal'
    }]);


    //the following value should get from metadata service
    //Not going to detail in this example, just hard code respond value here
    //const customComponents = get(this, 'customComponents');
    //const shouldRenderInMailModal = uiMetadata.shouldRenderComponent(customComponents);
    //const uiConfigs = uiMetadata.getComponentMetadata(get(this, 'customComponent.locationKey'))
    const mockMetaData = {
      'form-userdetail-inMail': {
        uiType: 'in-mail-modal',//can be actual component name, use form as placeholder
        fields: [{
          attributeId: '123',  //this attribute id maps to backend attributeId
          dataType: 'string',  //data type of custom property
          uiType: 'ep-text-field', //component name
          displayType: 'form',
          label: 'In Main Limit',
          labelPosition: 'right',
          topMessage: {
            //label should be tdef key, simplify the example to actual string
             label: 'Enter maximum number of inMail message',
          },
          bottomMessage: {
            label: 'Note: message user can send will be limited by this number'
          },
          bottomLink: 'https://www.linkedin.com',
          //hard code here for simplicity, should merge from API metadata as well
          shouldRender: true
        }],
        shouldRender: true
      }
    };

    set(this, 'uiConfigs', []);
    const uiConfigs = get(this,'uiConfigs');
    //we check if a locationKey should be rendered, then push it into uiConfigs array
    //then template will render those components dynamically
    get(this, 'customComponents').forEach((cp) => {
      const locationKey = cp.locationKey;
      const config = mockMetaData[locationKey];
      if (config.shouldRender) {
        uiConfigs.push(config);
      }
    });
  }
});
