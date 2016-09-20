import environment from './environment';
import 'material-design-lite';

//Configure Bluebird Promises.
//Note: You may want to use environment-specific configuration.
Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .plugin('aurelia-mdl-plugin');
    //.plugin('aurelia-google-maps', config => {
    //  config.options({
    //    apiKey: 'myapiKey',
    //    apiLibraries: 'drawing,geometry' //get optional libraries like drawing, geometry, ... - comma seperated list
    //  });
    //});

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
