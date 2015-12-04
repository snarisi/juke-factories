app.factory('AlbumFactory', function ($http, StatsFactory, SongFactory) {
  
  var exports = {};
  
  var getAlbumUrls = function (albums) {
    albums.forEach(function (album) {
      album.imageUrl = '/api/albums/' + album._id + '.image';
    })
  }
  
  exports.fetchAll = function () {
    //fetch all albums
    //return promise for albums.data
    return $http.get('/api/albums')
      .then(res => res.data)
      .then(albums => {
        getAlbumUrls(albums);
        return albums;
      })
      .catch(console.error.bind(console));
  }
  
  exports.fetchById = function (albumId) {
    //fetch one album
    //return promise for album.data
    return $http.get('/api/albums/' + albumId)
      .then(res => res.data)
      .then(album => {
        album.imageUrl = '/api/albums/' + album._id + '.image';
        SongFactory.getSongsUrl(album.songs);
        return StatsFactory.totalTime(album)
          .then(function(time) {
            album.totalTime = time; 
            return album;
          })
      }).catch(console.error.bind(console));
  }
  
  exports.fetchByArtistId = function (artistId) {
    return $http.get('/api/artists/' + artistId + '/albums')
      .then(res => res.data)
      .then(function (albums) {
        getAlbumUrls(albums);
        return albums;
      })
      .catch(console.error.bind(console)); 
  }
  
  return exports;
})