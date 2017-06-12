app.config( function ( $stateProvider, $urlRouterProvider ) {

    console.debug( "Loading routes" );

    $urlRouterProvider.otherwise( '/play/aa76c084-fdb7-4d26-8b98-38f58d1a502b' );

    $stateProvider

        .state( 'play', {
            url:         '/play/:deviceUDID',
            templateUrl: 'app/player.template.html',
            controller: 'playerController'
        } )


});