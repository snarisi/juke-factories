app.controller('PlayerCtrl', function($scope, $rootScope, PlayerFactory){

  $scope.currentSong = PlayerFactory.getCurrentSong; 
  $scope.playing = PlayerFactory.isPlaying; 
  $scope.progress = PlayerFactory.getProgress;
	
  $scope.toggle = PlayerFactory.toggle; 

  $scope.next = PlayerFactory.next; 
  $scope.prev = PlayerFactory.previous; 
});
