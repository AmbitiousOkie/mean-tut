var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){
  		$scope.test = 'Hello world!';



  		$scope.posts = [
		  {title: 'post 1', upvotes: 5},
		  {title: 'post 2', upvotes: 2},
		  {title: 'post 3', upvotes: 15},
		  {title: 'post 4', upvotes: 9},
		  {title: 'post 5', upvotes: 4}
		];

		$scope.addPost = function(){
			if(!$scope.title || $scope.title === '') {return; } // Prevents empty titles
			$scope.posts.push({
				title: "A new post!",
				link: $scope.link,
				upvotes: 0}
			); //pushes a new object to the end of the array
			$scope.title = ""; // runs afterwards to clear the variable
			$scope.link = ""; // runs afterwards to clear the variable
		};

		$scope.incrementUpvotes = function(post) {
		  post.upvotes += 1;
		};

}]);


