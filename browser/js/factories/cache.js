app.factory('Cache', function ($q) {
	
  return {
    
    cleanCache: function (cache, mins) {
      Object.keys(cache).forEach(function (key) {
        if (Date.now() - cache[key].timeStamp > mins * 60000) delete cache[key];
      });
    },

    returnCache: function(cache) {
      var deferred = $q.defer();
      deferred.resolve(cache);
      return deferred.promise;
    }
  }
})