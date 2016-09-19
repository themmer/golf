export class App {
  // :id is used similar like Ember routes
  // route and module id is required
  navigation = [
    { route: ['', 'home'], moduleId: './routes/home/home', nav: true, title: 'Home' },
    { route: 'info', moduleId: './routes/info/info', nav: true, title: 'Info' },
    { route: 'scorecard', moduleId: './routes/scorecard/scorecard', nav: true, title: 'Scorecard' },
    { route: 'footgolf', moduleId: './routes/footgolf/footgolf', nav: true, title: 'FootGolf' },
    { route: 'gallery', moduleId: './routes/gallery/gallery', nav: true, title: 'Gallery' },
    { route: 'banquet', moduleId: './routes/banquet/banquet', nav: true, title: 'Banquet' },
    { route: 'directions', moduleId: './routes/directions/directions', nav: true, title: 'Directions' }
  ];

  configureRouter(config, router) {
    this.router = router;

    // config.options.root = '/';
    // config.title = 'Elkhorn Ridge Golf Course';

    config.map(this.navigation);

    // Default to home instead of an idea like 404
    config.mapUnknownRoutes(this.navigation[0]);
  }
}
