var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
	'$scope',
	'posts',
	function($scope, posts){
  		$scope.test = 'Hello world!';



  		$scope.posts = posts.posts;

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


app.factory('posts', [function(){
	var o = {
		posts: []
	};
	return o;
}])

