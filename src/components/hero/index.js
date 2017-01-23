import angular from 'angular';

import HeroController from './hero.controller';

export default angular.module('app.hero', [])
  .controller('HeroController', HeroController)
  .name;
