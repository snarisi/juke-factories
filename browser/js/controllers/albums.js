app.controller('AllAlbumsCtrl', function ($http, $scope, $rootScope) {
  
  $scope.showAlbums = false;
  
  $http.get('/api/albums')
    .then(res => res.data)
    .then(albums => {
      albums.forEach(function(album) {
        album.imageUrl = '/api/albums/' + album._id + '.image';
      })
      $scope.albums = albums;
    })
    .catch(console.error.bind(console));
  
  $rootScope.$on('viewSwap', function (e, val) {
    if (val === 'allAlbums') $scope.showAlbums = true;
    else $scope.showAlbums = false;
  });
    
  $scope.showAlbum = function (albumId) {
    $rootScope.$broadcast('viewSwap', 'oneAlbum', albumId);
  };
})