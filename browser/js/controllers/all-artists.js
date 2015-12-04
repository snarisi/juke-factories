app.controller('AllArtistsCtrl', function ($http, $scope, $rootScope, ArtistFactory) {

	$scope.showArtists = false; 
  
    ArtistFactory.fetchAllArtists()
      .then(artists => $scope.artists = artists)
  
  $rootScope.$on('viewSwap', function(evt, val) {
    if(val === 'allArtists') $scope.showArtists = true; 
    else $scope.showArtists = false; 
  })

  $scope.showOneArtist = function(artistID) {
    $rootScope.$broadcast('viewSwap', 'oneArtist', artistID); 
  }

})