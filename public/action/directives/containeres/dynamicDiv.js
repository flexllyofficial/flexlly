angular.module('useAppFlex').directive('divF', function() {
  return {
    template: '<header style="background-color: blue;" use-app-flex-directive>{{teste}}</>',
    link: function(scope, element, attr){
      alert( element.text() );
    },
    controller: function($scope, $element) {
      $scope.teste = 'eaew';

      alert($element);
    }
  }
})
