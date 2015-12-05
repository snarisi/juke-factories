app.controller('AllAlbumsCtrl', function ($http, $scope, $rootScope, AlbumFactory) {
  
  $scope.showAlbums = false;
  
  $rootScope.$on('viewSwap', function (e, val) {
    if (val !== 'allAlbums') return $scope.showAlbums = false;
    
    $scope.showAlbums = true;

    AlbumFactory.fetchAll()
      .then(function (albums) {
        $scope.albums = albums;
      });
  });
    
  $scope.showAlbum = function (albumId) {
    $rootScope.$broadcast('viewSwap', 'oneAlbum', albumId);
  };
})