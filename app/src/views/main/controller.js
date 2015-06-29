'use strict';

/**
 * @ngdoc object
 * @name fkjs.views.main
 *
 * @requires $scope
 * @requires $locale
 * @requires $translate
 * @requires $mdSidenav
 * @requires $mdToast
 * @requires $translateProvider
 * @requires $mdThemingProvider
 *
 * @description
 * Refers to the view defined inside index.html, which is usually the main structure of the application.
 */
angular.module('fkjs.views.main', [])


/**
 * @ngdoc controller
 * @name fkjs.views.main#config
 * @methodOf fkjs.views.main
 * 
 * @description 
 * This config initialize the localization object which is being provided by {@link http://angular-translate.github.io/docs/#/api angular-translate package}.  
 * You can also use {@link https://docs.angularjs.org/guide/i18n#messageformat-extensions message format}.
 * 
 * Create custom theme for this application.
 * For more info please refer to https://material.angularjs.org/#/Theming/
 */
.config(function($translateProvider, $mdThemingProvider){
    // Register a loader for the static files
    $translateProvider.useStaticFilesLoader({
        prefix: 'data/locale/',
        suffix: '.json'
    });
    
    //escape html chars inside messages
    $translateProvider.useSanitizeValueStrategy('escaped');

    
    // primary
    $mdThemingProvider.definePalette('app-primary-pallete',{
        '50': '#d3f7f4',
        '100': '#b6f4f0',
        '200': '#acf3ee',
        '300': '#97efe9',
        '400': '#25dacd', 
        '500': '#1fb6ab',
        '600': '#17867e',
        '700': '#136f69',
        '800': '#0d4b47',
        '900': '#072624',
        'A100': '#A7FFEB',
        'A200': '#64FFDA',
        'A400': '#1DE9B6',
        'A700': '#00BFA5',
        'contrastDefaultColor': 'light',
        'contrastLightColors': '600 700 800 900'
//        'contrastStrongLightColors': '800 900'
    });
    
    // accent
    $mdThemingProvider.definePalette('app-accent-pallete',{
        '50': '#fef7e9',
        '100': '#fdf2df',
        '200': '#fcedd2',
        '300': '#fbe4ba',
        '400': '#f7cb79', 
        '500': '#f4b541',
        '600': '#d7900d',
        '700': '#b2770b',
        '800': '#795108',
        '900': '#3c2804',
        'A100': '#FFE57F',
        'A200': '#f4b541', //same as 500
        'A400': '#FFC400',
        'A700': '#FFAB00',
        'contrastDefaultColor': 'light',
        'contrastLightColors': '600 700 800 900'
    });
    
    // warn
    $mdThemingProvider.definePalette('app-warn-pallete',{
        '50': '#fff8f7',
        '100': '#fff0ef',
        '200': '#ffe5e3',
        '300': '#ffd1cd',
        '400': '#ff9c93', 
        '500': '#ff6e61',
        '600': '#ff311f',
        '700': '#ff1500',
        '800': '#cc1100',
        '900': '#960c00',
        'A100': '#FF8A80',
        'A200': '#FF5252',
        'A400': '#FF1744',
        'A700': '#D50000',
        'contrastDefaultColor': 'light',
        'contrastLightColors': '600 700 800 900'
    });
    
    // background
    $mdThemingProvider.definePalette('app-background-pallete',{
        '50': '#fafafb',
        '100': '#f5f6f8',
        '200': '#eceff2',
        '300': '#dde1e7',
        '400': '#b6c0cd', 
        '500': '#93a2b5',
        '600': '#677b96',
        '700': '#586980',
        '800': '#414e5e',
        '900': '#272f39',
        'A100': '#f5f6f8', //same as 100
        'A200': '#b0bec5',
        'A400': '#78909c',
        'A700': '#455a64',
        'contrastDefaultColor': 'light',
        'contrastLightColors': '600 700 800 900'
    });
    
    // Use custom palletes as the theme for the application
    $mdThemingProvider.theme('default')
    
    .primaryPalette('app-primary-pallete',{
//        'default': '500', // by default use this shade for primary intentions
//        'hue-1': '50', // use this shade in html: <code>class="md-hue-1"</code>
//        'hue-2': '400', // use this shade in html: <code>class="md-hue-2"</code>
//        'hue-3': 'A100' // use this shade in html: <code>class="md-hue-3"</code>
    })
    
    .accentPalette('app-accent-pallete')
    .warnPalette('app-warn-pallete')
    .backgroundPalette('app-background-pallete');
})


/**
 * @ngdoc controller
 * @name fkjs.views.main#MainController
 * @methodOf fkjs.views.main
 *
 * @description
 * Controls this view's logic and behavior. Since it's the main view it is usually referring to the structure of index.html  
 * This controller is responsible for managing global aspects of the application, such as localization.
 */
.controller('MainController', function($scope, $locale, $translate, $mdSidenav, $mdToast){
    // Tell the module what language to use by default (=file name)
    $translate.preferredLanguage($locale.id);
    $translate.use($locale.id);
    
    $scope.sidnavId = 'appSideNav';
        
    $scope.toggleSidenav = function(menuId){
        $mdSidenav(menuId).toggle();
    };
    
    $scope.showSimpleToast = function(){
        $mdToast.show(
            $mdToast.simple()
                .content('Click')
                .position('top right')
                .hideDelay(1000)
        );
    };
});