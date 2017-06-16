angular.module('useAppFlex').directive('divActionMenu', function() {
  return {
    controller: function($scope,
      $element,
      $compile,
      dynamicContOpenMenu,
      dynamicSubOpenMenu,
      dynamicContItems
    ) {

      var classNameElement = $($element).attr("data-flex");

      $($element).removeAttr('div-action-menu');

      $($element.wrap(
      dynamicContOpenMenu.openTagContOpenMenu()
      +
      dynamicContOpenMenu.closeTagContOpenMenu()
      ));

      $($element.after(

        dynamicSubOpenMenu.openTagSubOpenMenu(true, 'Opções DIV')

        // +
        // dynamicSubOpenMenu.openTagItemSubMenu()
        +

          dynamicContItems.openTagContItems(classNameElement, '')

          // +
          //   dynamicSubOpenMenu.openTagSubOpenMenu()
          //   +
          //     dynamicSubOpenMenu.openTagItemSubMenu()
          //       +
          //
          //         '<md-button ng-click="$mdMenu.open()">New</md-button>'
          //           +
          //             dynamicSubOpenMenu.openTagSubOpenMenu()
          //               +
          //                 dynamicSubOpenMenu.openTagItemSubMenu()
          //                   +
          //                     '<md-button ng-click="$mdMenu.open()">New</md-button>'
          //                     +
          //                   dynamicSubOpenMenu.closeTagItemSubMenu()
          //                 +
          //               dynamicSubOpenMenu.closeTagSubOpenMenu()
          //
          //             +
          //           dynamicSubOpenMenu.closeTagItemSubMenu()
          //         +
          //       dynamicSubOpenMenu.closeTagSubOpenMenu()
          //
            //   +
            // dynamicSubOpenMenu.closeTagItemSubMenu()
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
