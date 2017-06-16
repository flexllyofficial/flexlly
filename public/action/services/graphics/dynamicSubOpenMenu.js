angular.module('useAppFlex').factory('dynamicSubOpenMenu', function(){
  var _openTagSubOpenMenu = function(init, title) {

    title =  title ? title : 'Opções';

    if (init === true) {
      return '<md-menu-content>'
              +
              '<center style="font-size:13px;">' + title +'</center>'
              +
              '<md-menu-divider></md-menu-divider>';
    }
    else{
      return '<md-menu-content>'
    }
  };

  var _closeTagSubOpenMenu = function() {
    return '</md-menu-content>';
  };

  var _openTagItemSubMenu = function(){
    return  '<md-menu-item>'
            +
            '<md-menu>';
  };

  var _closeTagItemSubMenu = function(){
    return '</md-menu></md-menu-item>';
  };

  return {
    openTagSubOpenMenu : _openTagSubOpenMenu,
    closeTagSubOpenMenu : _closeTagSubOpenMenu,
    openTagItemSubMenu : _openTagItemSubMenu,
    closeTagItemSubMenu : _closeTagItemSubMenu
  }
})
