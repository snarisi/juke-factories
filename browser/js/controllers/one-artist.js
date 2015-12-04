app.controller('OneArtistCtrl', function($q, $http, $scope, $rootScope, PlayerFactory, SongFactory, AlbumFactory, ArtistFactory) {

	$scope.showOneArtist = false;

    $scope.currentSong = PlayerFactory.getCurrentSong; 
    $scope.playing = PlayerFactory.isPlaying; 
    $scope.toggle = PlayerFactory.toggle; 
  
  
	$rootScope.$on('viewSwap', function(e, val, artistId) {
		if(val !== 'oneArtist') return $scope.showOneArtist = false; 

        var getArtist = ArtistFactory.fetchArtistById(artistId);
        var getSongs = SongFactory.fetchAllSongs(artistId);
        var getAlbums = AlbumFactory.fetchByArtistId(artistId);

        $q.all([getArtist, getSongs, getAlbums])
          .then(function(dataArr) { 
            console.log(dataArr)
            $scope.artist = dataArr[0]; 
            $scope.artist.songs = dataArr[1]; 
            $scope.artist.albums = dataArr[2]; 
            $scope.showOneArtist = true;
          })

	}) 

    $scope.showAlbum = function (albumId) {
      $rootScope.$broadcast('viewSwap', 'oneAlbum', albumId);
    };
}); 