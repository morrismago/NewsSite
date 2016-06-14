function NewsFactotyCtrl($scope, NewsFactoty) {

    $scope.news = NewsFactoty.query();

}