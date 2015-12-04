app.factory('SongFactory', function ($http) {
  var exports = {};
    
  exports.getSongsUrl = function (songs) {
    songs.forEach(function (song) {
      song.audioUrl = '/api/songs/' + song._id + '.audio';
    });
    return songs;    
  }
  
  exports.fetchAllSongs = function(artistId) {
    return $http.get('/api/artists/' + artistId + '/songs')
      .then(res => res.data)
      .then(songs => exports.getSongsUrl(songs))
      .catch(console.error.bind(console)); 
  }
  
  return exports;
})