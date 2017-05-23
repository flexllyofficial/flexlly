angular.module('useAppFlex').factory('dynamicContOpenMenu', function(){
  var _openTagContOpenMenu = function() {
    return '<md-content><md-menu-bar><md-menu>';
  };

  var _closeTagContOpenMenu = function() {
    return '</></></>';
  }

  return {
    openTagContOpenMenu : _openTagContOpenMenu,
    closeTagContOpenMenu : _closeTagContOpenMenu
  }
})
