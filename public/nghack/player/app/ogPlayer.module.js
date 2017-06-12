/*********************************

 File:       ogConApp.module
 Function:   Base Control App
 Copyright:  Ourglass
 Date:       4/10/15
 Author:     mkahn

 **********************************/


var app = angular.module('ogConApp', [ 'ui.router', 'ui.bootstrap', 'ui.ogMobile', 'ngAnimate', 'toastr']);



app.run( function ( $rootScope, $log ) {

    $rootScope.$on( '$stateChangeError', function ( event, toState, toParams, fromState, fromParams, error ) {
        event.preventDefault();
        $log.error( error );
    } );

} );


app.controller('playerController', function( $stateParams, $scope, $log, $timeout ){

    $log.debug("playerController loading");
    $log.debug($stateParams);

    $scope.deviceUDID = $stateParams.deviceUDID;
    $log.debug( "UDID is: " + $scope.deviceUDID );

    $timeout( function () {

        JSMpeg.CreateVideoElements();

    }, 1000 );


    $scope.back = function(){
        window.location.href = "https://cloud-dm.ourglass.tv/blueline/control/index.html?deviceUDID="+$scope.deviceUDID;
    }

});