/* eslint-disable */

import _ from 'lodash';

export default class HeroController {
    constructor($scope) {
        this.$scope = $scope;
        this.$scope.step1Selected = false;
        this.$scope.step2Selected = false;
        this.docsDataFiltered = [];

        this.select1Data = [
            {
                name: 'Broadband',
                id: 1,
            },
            {
                name: 'Telefoni',
                id: 2,
            },
            {
                name: 'Mobil',
                id: 3,
            },
            {
                name: 'Fiber',
                id: 4,
            },
        ];

        this.select2Data = [
            {
                id: 1,
                name: 'Bistream',
                dep: 1
            },
            {
                id: 2,
                name: 'Bredbånd',
                dep: 1
            },
            {
                id: 3,
                name: 'Ethernet',
                dep: 1
            },
            {
                id: 4,
                name: 'Fiber',
                dep: 1
            },
            {
                id: 5,
                name: 'Samhusning',
                dep: 1
            },
            {
                id: 6,
                name: 'ATM',
                dep: 1
            },
            {
                id: 7,
                name: 'Rå kobber',
                dep: 1
            },
            {
                id: 8,
                name: 'Teleconnect',
                dep: 2
            },
            {
                id: 9,
                name: 'SIP Gateway',
                dep: 2
            },
            {
                id: 10,
                name: 'SIP Connect',
                dep: 2
            },
            {
                id: 11,
                name: 'Fastnet',
                dep: 2
            },
            {
                id: 12,
                name: 'Samtrafik',
                dep: 2
            },
            {
                id: 13,
                name: 'SIP MVNO',
                dep: 3
            },
            {
                id: 14,
                name: 'MVNO',
                dep: 3
            },
            {
                id: 15,
                name: 'Gensalg mobil',
                dep: 3
            },
            {
                id: 16,
                name: 'Nummerportering',
                dep: 3
            },
            {
                id: 17,
                name: 'Rå fiber',
                dep: 4
            },
            {
                id: 18,
                name: 'IP/Ethernet',
                dep: 4
            },
            {
                id: 19,
                name: 'Fiber og transmission',
                dep: 4
            },
            {
                id: 20,
                name: 'Mastleje',
                dep: 4
            },
            {
                id: 21,
                name: 'IP Peering/Transit',
                dep: 4
            },
        ]

        this.select3Data = [
            {
                id: 'Agreements',
                name: 'Agreements',
                dep: 1,
            },
            {
                id: 'Tech docs',
                name: 'Tech docs',
                dep: 2,
            },
            {
                id: 'Prices',
                name: 'Prices',
                dep: 3,
            },
            {
                id: 'Bundles',
                name: 'Bundles',
                dep: 4,
            },
        ];

        this.buildDocs();
    }

    selectChanged(which) {

        if(which === 1 && this.$scope.step.select1 > 0 && this.$scope.step.select1 < 5) {

            if(!this.$scope.step1Selected) {
                this.$scope.step1Selected = true;

                this.select2DataFiltered = _.filter(this.select2Data, {dep: this.$scope.step.select1});
                this.$scope.docsDataFiltered = _.filter(this.$scope.docsData, {dep: this.$scope.step.select1});
            }else{
                this.$scope.step1Selected = false;
                this.$scope.step2Selected = false;
                this.$scope.step.select2 = '';
                this.$scope.step.select3 = '';
                this.$scope.docsDataFiltered = this.$scope.docsData;
                this.selectChanged(which);
            }
        }

        if(which === 2) {

            if(!this.$scope.step2Selected){
                this.$scope.step2Selected = true;

                this.$scope.docsDataFiltered = _.filter(this.$scope.docsDataFiltered, {prod: this.$scope.step.select2});

            }else{
                this.$scope.step1Selected = false;
                this.$scope.step2Selected = false;
                this.$scope.step.select1 = '';
                this.$scope.step.select2 = 'blah';
                this.$scope.step.select3 = '';
                this.$scope.docsDataFiltered = this.$scope.docsData;
                this.selectChanged(1);
            }
        }

        if(which === 3) {

            this.$scope.docsDataFiltered = _.filter(this.$scope.docsDataFiltered, {tpe: this.$scope.step.select3});
        }
    }

    buildDocs() {

        const _this = this;
        let randomNumber = [3,5,4,6,2];
        let randomDoc = ['Agreements', 'Tech docs', 'Prices', 'Bundles'];
        let docsData = [];

        for (var i = 0; i < this.select2Data.length; i++) {
            for (let j of Array(_.sample(randomNumber)).keys()) {
                let docType = _.sample(randomDoc);
                docsData.push(
                    {
                        name: this.select2Data[i].name + ' ' + docType,
                        dep: this.select2Data[i].dep,
                        prod: this.select2Data[i].id,
                        tpe: docType
                    });
            }
        }
        this.$scope.docsData = docsData;
        this.$scope.docsDataFiltered = this.$scope.docsData;
        if(!this.$scope.$$phase) {
            this.$scope.$apply();
        }

        console.log(this.$scope);
    }
}

HeroController.$inject = ['$scope']
