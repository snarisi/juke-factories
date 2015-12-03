app.controller('SidebarCtrl', function ($scope, $rootScope) {
  $scope.viewAlbums = function () {
    $rootScope.$broadcast('viewSwap', 'allAlbums');
  };
  
  $scope.viewAllArtists = function () {
    $rootScope.$broadcast('viewSwap', 'allArtists');
  }
});