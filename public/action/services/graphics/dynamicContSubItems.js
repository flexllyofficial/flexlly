angular.module('useAppFlex').factory('dynamicContSubItems', ['dynamicSubOpenMenu', 'validationGraphics' , function(
  dynamicSubOpenMenu,
  validationGraphics
  ){
  var _openContItems = function() {

    var availableContainersItems = {
      'FlexItems' : 'FlexItems',
      'containers' : 'div, header, article, aside, footer',
      'style' : 'width, height, margin, padding, border',
      'actions' : 'delete'
    }

    var argumentsFlex = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
    var resultValidation = validationGraphics.valItems(argumentsFlex);

    if (resultValidation !== true) {
      console.log(resultValidation);
      return '';
    }

    if (validationGraphics.getType(argumentsFlex[1]) == 'string') {

      var ignoreItems = validationGraphics.trimArray(argumentsFlex[1].split(/(?:\[|\])+/));
      ignoreItems = ignoreItems[1];
      ignoreItems = ignoreItems.split(',');

      for(var index in ignoreItems) {
        delete availableContainersItems[ignoreItems[index]];
      }

    }

    var resulCont = "";

    for(var index in availableContainersItems) {

      if(availableContainersItems[index] != 'FlexItems') {
        resulCont += dynamicSubOpenMenu.openTagItemSubMenu()

                            + '<md-button ng-click="$mdMenu.open()">' + availableContainersItems[index] + '</md-button>' +

                     dynamicSubOpenMenu.closeTagItemSubMenu();
      }

    }
    return resulCont;
  };

  return {
    openContSubItems : _openContSubItems,
  }
}])
