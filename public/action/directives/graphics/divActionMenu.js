angular.module('useAppFlex').directive('divActionMenu', function() {
  return {
    // template: '<header style="background-color: blue;" use-app-flex-directive>{{teste}}</>',
    // link: function(scope, element, attr){
    //
    // },
    controller: function($scope, $element, $compile, $mdCompiler, dynamicContOpenMenu, dynamicSubOpenMenu) {
      $($element.wrap(
      dynamicContOpenMenu.openTagContOpenMenu()
      +
      dynamicContOpenMenu.closeTagContOpenMenu()
      ));

      $($element.after(
        dynamicSubOpenMenu.openTagSubOpenMenu()
        +
        '<md-button ng-click="$mdMenu.open($event)">New</md-button><span></span>'
        +
        dynamicSubOpenMenu.closeTagSubOpenMenu()
      ));


      var els = $($element.parent());
      var els = angular.element(els);
      console.log(els);


      $mdCompiler.compile({
        contentElement: els
      }).then(function (compileData) {
        compileData.element // Content Element (same as above)
        compileData.link // This does nothing when using a contentElement.
      });
    }
  }
})
