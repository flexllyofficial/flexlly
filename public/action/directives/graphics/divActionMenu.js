angular.module('useAppFlex').directive('divActionMenu', function() {
  return {
    controller: function($scope, $element, $compile, dynamicContOpenMenu, dynamicSubOpenMenu) {

      $($element).removeAttr('div-action-menu');

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

        var els = $element[0].parentElement.offsetParent.offsetParent;

        els = angular.element(els);
        console.log(els);
        $compile(els)($scope);

    }
  }
})
