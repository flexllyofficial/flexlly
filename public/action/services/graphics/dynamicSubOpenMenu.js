angular.module('useAppFlex').factory('dynamicSubOpenMenu', function(){
  var _openTagSubOpenMenu = function() {
    return '<md-menu-content>';
  };
  var _closeTagSubOpenMenu = function() {
    return '</>';
  }

  return {
    openTagSubOpenMenu : _openTagSubOpenMenu,
    closeTagSubOpenMenu : _closeTagSubOpenMenu
  }
})
