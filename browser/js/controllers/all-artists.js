app.controller('AllArtistsCtrl', function ($http, $scope, $rootScope, ArtistFactory) {

	$scope.showArtists = false; 
  
  
  $rootScope.$on('viewSwap', function(evt, val) {
    if(val !== 'allArtists') return $scope.showArtists = false;
      
    $scope.showArtists = true; 
    ArtistFactory.fetchAllArtists()
      .then(artists => $scope.artists = artists)     
  });

  $scope.showOneArtist = function(artistID) {
    $rootScope.$broadcast('viewSwap', 'oneArtist', artistID); 
  };

})