app.factory('ArtistFactory', function ($http, AlbumFactory, SongFactory) {
  var exports = {};
  
  exports.fetchArtistById = function (artistId) {
    return $http.get('/api/artists/' + artistId)
      .then(res => res.data)
      .catch(console.error.bind(console));   
  }
  
  exports.fetchAllArtists = function () {
	return $http.get('/api/artists')
      .then(res => res.data)
      .catch(console.error.bind(console)); 
  }
  
  return exports;
})