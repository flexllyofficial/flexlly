angular.module('useAppFlex').factory('dynamicSubOpenMenu', function(){
  var _openTagSubOpenMenu = function() {
    return '<md-menu-content><md-menu-item><md-menu>';
  };
  var _closeTagSubOpenMenu = function() {
    return '</></></>';
  }

  return {
    openTagSubOpenMenu : _openTagSubOpenMenu,
    closeTagSubOpenMenu : _closeTagSubOpenMenu
  }
})
