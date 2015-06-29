'use strict';

angular.module('fkjs.widgets.navbar', [])


/**
 * @ngdoc directive
 * @name fkjs.widgets.navbar:fkjsNavbar
 * 
 * @requires $state
 * @requires $rootScope
 * 
 * @param {string} sidnavId The ID of the navbar. Will be used to show/hide the bar.
 *
 * @description
 * UI widget for a side navigation menu.
 * Displays a list of links to pages in a menu bar, and manages clicks on each of the items in the list.
 * 
 * @usage
 * <fkjs-navbar app-title="title" sidnav-id="id"></fkjs-navbar>
 */
.directive('fkjsNavbar', function($state, $rootScope){
    return {
        restrict: 'E',
        templateUrl: 'src/widgets/navbar/template.html',
        replace: true,

        scope: {
            sidnavId: '@'
        },

        controller: function($scope){
            /*
             * set "active" css on selected menu item,
             * fire event to notify header regarding this change, and update its text.
             * >> Please note that it is relying on the navbarItems array structure (see below).
             */
            $scope.$on('$stateChangeSuccess', function(event, current){
                var stateName = $state.$current.self.name;
                var items = $scope.navbarItems;
                var i, stateText, len=items.length;
                for(i=0 ; i<len ; i++){
                    if(items[i].pageUrl === stateName){
                        stateText = items[i].locale;
                        $scope.navbarItems[i].isActive = true;
                    }
                    else{
                        $scope.navbarItems[i].isActive = false;
                    }
                }

                $rootScope.$broadcast('navbarStateChange', stateText);
            });
        },
        
        link: function(scope){
            scope.navbarItems = [{
                pageUrl: 'home',
                locale: 'widgets.navbar.home',
                icon: 'mdi-home',
                isActive: true
            },{
                pageUrl: 'signup',
                locale: 'widgets.navbar.signup',
                icon: 'mdi-mode-edit'
            },{
                pageUrl: 'about',
                locale: 'widgets.navbar.about',
                icon: 'mdi-info-outline'
            }];
        }
    };
});