app.controller('AlbumCtrl', function($scope, $http, $rootScope, PlayerFactory, StatsFactory, AlbumFactory) {
  $scope.showOneAlbum = false;
  // load our initial data


  $scope.currentSong = PlayerFactory.getCurrentSong; 
  $scope.playing = PlayerFactory.isPlaying; 

  $scope.toggle = PlayerFactory.toggle; 

  // a "true" modulo that wraps negative to the top of the range
  function mod (num, m) { return ((num%m)+m)%m; };

  // jump `val` spots in album (negative to go back)
  function skip (val) {
    if (!$scope.currentSong) return;
    var idx = $scope.album.songs.indexOf($scope.currentSong);
    idx = mod( (idx + (val || 1)), $scope.album.songs.length );
    // $rootScope.$broadcast('play', $scope.album.songs[idx]);
    PlayerFactory.start($scope.album.songs[idx]); 
  };
//  function next () { skip(1); };
//  function prev () { skip(-1); };
  $rootScope.$on('viewSwap', function(e, val, albumId) {
    if (val !== 'oneAlbum') return $scope.showOneAlbum = false;

    AlbumFactory.fetchById(albumId)
      .then(function (album) {
        $scope.album = album;
        $scope.showOneAlbum = true;
      })
  });

});

