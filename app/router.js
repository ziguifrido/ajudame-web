import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ong');
  this.route('contato');
  this.route('sobre');
  this.route('ongs');
  this.route('admin', function(){
    this.route('ong')
    this.route('usuario');
    this.route('cidade', function() {
      this.route('new');
    });
    this.route('estado', function() {
      this.route('new');
    });
    this.route('ong-tipo', function() {
      this.route('new');
    });
    this.route('contato');
  });
});

export default Router;
