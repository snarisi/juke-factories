app.controller('AllArtistsCtrl', function ($http, $scope, $rootScope) {

	$scope.showArtists = false; 

	$http.get('/api/artists')
		.then(res => res.data)
    .then(function(artists) {
      $scope.artists = artists; 
    })
    .catch(console.error.bind(console)); 

  $rootScope.$on('viewSwap', function(evt, val) {
    if(val === 'allArtists') $scope.showArtists = true; 
    else $scope.showArtists = false; 
  })

  $scope.showOneArtist = function(artistID) {
    $rootScope.$broadcast('viewSwap', 'oneArtist', artistID); 
  }

})