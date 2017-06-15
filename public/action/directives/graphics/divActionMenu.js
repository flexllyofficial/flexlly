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
        '<center style="font-size:13px;">Opções principais</center>'
        +
        '<md-menu-divider></md-menu-divider>'

        +
        '<md-menu-item>'
        +
        '<md-menu>'

        +
        '<md-button ng-click="$mdMenu.open()">New</md-button>'
        +
        '<md-menu-content><md-menu-item><md-menu><md-button ng-click="$mdMenu.open()">New</md-button>'
        +
        '<md-menu-content>'
        +
          '<md-menu-item>'
          +
            '<md-menu>'
              +
              '<md-button ng-click="$mdMenu.open()">New</md-button>'
              +
            '</md-menu>'
            +
          '</md-menu-item>'
          +
        '</md-menu-content>'
        +
        '</md-menu></md-menu-item></md-menu-content>'
        +

        '</md-menu>'
        +
        '</md-menu-item>'
        +

        '<md-menu-item>'
        +
        '<md-menu>'

        +
        '<md-button ng-click="$mdMenu.open()">New</md-button>'
        +
        '<md-menu-content><md-menu-item><md-menu><md-button ng-click="$mdMenu.open()">out</md-button>'
        +
        '<md-menu-content>'
        +
          '<md-menu-item>'
          +
            '<md-menu>'
              +
              '<md-button ng-click="$mdMenu.open()">New</md-button>'
              +
            '</md-menu>'
            +
          '</md-menu-item>'
          +
        '</md-menu-content>'
        +
        '</md-menu></md-menu-item></md-menu-content>'
        +

        '</md-menu>'
        +
        '</md-menu-item>'
        +

        // '<md-button ng-click="$mdMenu.open()">New</md-button>'
        // +
        // '<md-menu-content><md-menu-item><md-menu><md-button ng-click="$mdMenu.open()">out</md-button>'
        // +
        // '<md-menu-content>'
        // +
        //   '<md-menu-item>'
        //   +
        //     '<md-menu>'
        //       +
        //       '<md-button ng-click="$mdMenu.open()">New</md-button>'
        //       +
        //     '</md-menu>'
        //     +
        //   '</md-menu-item>'
        //   +
        // '</md-menu-content>'
        // +
        // '</md-menu></md-menu-item></md-menu-content>'
        // +
        dynamicSubOpenMenu.closeTagSubOpenMenu()
      ));

        var els = $element[0].parentElement.offsetParent.offsetParent;

        els = angular.element(els);
        console.log(els);
        $compile(els)($scope);

    }
  }
})
