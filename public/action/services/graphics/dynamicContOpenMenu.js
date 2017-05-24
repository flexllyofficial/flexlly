angular.module('useAppFlex').factory('dynamicContOpenMenu', function(){
  var _openTagContOpenMenu = function() {
    return '<md-content style="width: 100%; height: 100%; padding: 0; margin: 0"><md-menu-bar style="width: 100%; height: 100%; padding: 0; margin: 0"><md-menu style="width: 100%; height: 100%; padding: 0; margin: 0">';
  };

  var _closeTagContOpenMenu = function() {
    return '</></></>';
  }

  return {
    openTagContOpenMenu : _openTagContOpenMenu,
    closeTagContOpenMenu : _closeTagContOpenMenu
  }
})
