app.factory('PlayerFactory', function($rootScope, Cache) {
  var tools = {}; 
  var playStatus = false; 
  var currentSong; 
  var currentAudio;
  var progress; 
  
  //audio cache functionality
	var songCache = {};

	var makeAudio = function(url) {
		var audio = document.createElement('audio');
		audio.addEventListener('ended', function () {
			tools.next();
		});

		audio.addEventListener('timeupdate', function () {
			progress = 100 * audio.currentTime / audio.duration;
			$rootScope.$digest();
		});
		
		audio.timeStamp = Date.now();
		audio.src = url;
		audio.load();
		return audio;
	}
	
  var pause = function() {
    if (currentAudio) currentAudio.pause();
    playStatus = false;
  }; 

  var start = function(song) {
    // stop existing audio (e.g. other song) in any case
    pause();
    playStatus = true;
	  
	//clean old songs from cache
	Cache.cleanCache(songCache, 1);

	if (!songCache[song._id]) songCache[song._id] = makeAudio(song.audioUrl);

	currentSong = song;
	currentAudio = songCache[song._id];
	currentAudio.currentTime = 0;
    currentAudio.play();
	console.log(songCache);
  }; 

  var resume = function() {
    currentAudio.play(); 
    playStatus = true; 
  }; 
  
  tools.isPlaying = function () {
    return playStatus; 
  }; 
  tools.getCurrentSong = function() {
    return currentSong; 
  };  

  tools.getProgress = function() {
    return progress; 
  }; 

  tools.toggle = function(song) {
    if(playStatus && currentSong === song) {
      pause(); 
    } else if (currentSong === song) {
      resume(); 
    } else {
      start(song); 
    }
  }

  tools.next = function() {
  }; 

  tools.previous = function() {
  }; 
  
  return tools; 
  
  
  
})