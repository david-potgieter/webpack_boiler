// import _ from 'lodash';

export default class HeroController {
    constructor($scope) {
        this.$scope = $scope;
        // this.title = this.buildTitle();
        this.title = 'dude?';

        console.log(this.title);
    }
}

HeroController.$inject = ['$scope'];
