app.controller('OneArtistCtrl', function($q, $http, $scope, $rootScope) {

	$scope.showOneArtist = false;

	$rootScope.$on('viewSwap', function(e, val, artistId) {
		if(val !== 'oneArtist') return $scope.showOneArtist = false; 

		var getArtist = $http.get('/api/artists/' + artistId)
			.then(res => res.data)
      .catch(console.error.bind(console)); 

    var getSongs = $http.get('/api/artists/' + artistId +'/songs')
      .then(res => res.data)
      .catch(console.error.bind(console)); 

    var getAlbums = $http.get('/api/artists/' + artistId + '/albums')
      .then(res => res.data)
      .catch(console.error.bind(console)); 

    $q.all([getArtist, getSongs, getAlbums])
      .then(function(dataArr) { 
        console.log(dataArr)
        $scope.artist = dataArr[0]; 
        $scope.artist.songs = dataArr[1]; 
        $scope.artist.albums = dataArr[2]; 
        $scope.showOneArtist = true; 
      })

	}) 
}); 