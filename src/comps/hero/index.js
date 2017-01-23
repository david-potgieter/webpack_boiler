import angular from 'angular';

import HeroController from './hero.controller';
import selector from './hero.directive';

export default angular.module('app.hero', [selector])
  .controller('HeroController', HeroController)
  .name;
