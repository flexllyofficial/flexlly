angular.module('useAppFlex').factory('dynamicContItems', ['dynamicSubOpenMenu' , function(dynamicSubOpenMenu){
  var _openTagContItems = function() {

    var availableContainersItems = [
      'containers',
      'style',
      'actions'
    ];

    var addContainersItems = new Array();
    var ignoreItems = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));

    addContainersItems = availableContainersItems.filter(function(el) {
      var keyRemove = ignoreItems.indexOf(el);
      return keyRemove === -1;
    })

    var resulCont = "";
    
    addContainersItems.forEach(function(nameButton){
      resulCont += dynamicSubOpenMenu.openTagItemSubMenu()

                          + '<md-button ng-click="$mdMenu.open()">' + nameButton + '</md-button>' +

                   dynamicSubOpenMenu.closeTagItemSubMenu();
    })

    return resulCont;
  };

  return {
    openTagContItems : _openTagContItems,
  }
}])
