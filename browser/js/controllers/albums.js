app.controller('AllAlbumsCtrl', function ($http, $scope, $rootScope, AlbumFactory) {
  
  $scope.showAlbums = false;
  
  AlbumFactory.fetchAll()
    .then(function (albums) {
      $scope.albums = albums;
    });
    
  $rootScope.$on('viewSwap', function (e, val) {
    if (val === 'allAlbums') $scope.showAlbums = true;
    else $scope.showAlbums = false;
  });
    
  $scope.showAlbum = function (albumId) {
    $rootScope.$broadcast('viewSwap', 'oneAlbum', albumId);
  };
})