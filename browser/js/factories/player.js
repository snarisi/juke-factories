app.factory('PlayerFactory', function() {
	var tools = {}; 
  var playStatus = false; 
  var currentSong; 
  var progress; 

  // initialize audio player
  var audio = document.createElement('audio');
  audio.addEventListener('ended', function () {
    tools.next();
  });
  audio.addEventListener('timeupdate', function () {
    progress = 100 * audio.currentTime / audio.duration;
    // $scope.$digest();
  });

  var pause = function() {
    audio.pause();
    playStatus = false;
  }; 

  var start = function(song) {
    // stop existing audio (e.g. other song) in any case
    pause(); 
    playStatus = true; 
    // resume current song
    // if (song === tools.currentSong) return audio.play();
    // enable loading new song
    currentSong = song;
    audio.src = song.audioUrl;
    audio.load();
    audio.play();
  }; 

  var resume = function() {
    audio.play(); 
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