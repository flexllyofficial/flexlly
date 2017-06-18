angular.module('useAppFlex').factory('validationGraphics',  function(){

  var _getType = function(val) {
    if (typeof val === 'undefined') return 'undefined';
    if (typeof val === 'object' && !val) return 'null';
    return ({}).toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  };

  var _trimArray = function(val){

      for(var index in val) {
        val[index] = val[index].trim();

        if (val[index].split(',').length > 1){
        var el = val[index].split(',');

        for(var i in el) {
         el[i] = el[i].trim();
        }

        val[index] = el.join();
      }
    }

    return val;
  }

  var _valBasic = function(val, name) {
    if (_getType(val) == 'undefined') return 'Error code: 1, Message: '+name+' undefined';
    if (_getType(val) != 'string') return 'Error code: 2, Message: '+name+' different from string';
    var arr = val.split(/(?:\[|\])+/);
    if (arr.length != 3) return 'Error code 3, Message: '+name+' Wrong format';
    if (arr[1].length == 0) return 'Error code 4, Message: value from action not meet';
    if (arr[0] != name) return 'Error code 5, Message: prefix '+name+' not defined'
    arr = null;
    return true;
  }

  var _valFlexKey = function(val) {
    return _valBasic(val, 'FlexKey');
  }

  var _valFlexRemove = function(val) {
    return _valBasic(val, 'FlexRemove');
  }

  var _valFlexItem = function(val, name) {

    if (_getType(val) == 'undefined') return 'Error code: 6, Message: FlexItems not defined';
    if (_getType(val) != 'object') return 'Error code: 7, Message: FlexItems different from object';
    if (typeof val[name] == 'undefined' || val[name] != 'FlexItems') return 'Error code 8, Message: prefix '+name+' not defined';
    return true;

  }

  var _valItems = function(val) {

    if (_getType(val) == 'undefined') return 'Error code 9, Message: incorrect parameters validation';
    if (_getType(val) != 'array') return 'Error code 10, Message: incorrect format parameters validation';
    if (val.length != 3 && val.length != 2) return 'Error code 11, Message: Arguments insufficient validation';

    if (val.length == 2) {
      var resultValidation = _valFlexKey(val[0]);
      if (resultValidation !== true) return resultValidation;
      resultValidation = _valFlexItem(val[1], 'FlexItems');
      if (resultValidation !== true) return resultValidation;
    }else{
      var resultValidation = _valFlexKey(val[0]);
      if (resultValidation !== true) return resultValidation;
      var resultValidation = _valFlexRemove(val[1]);
      if (resultValidation !== true) return resultValidation;
      resultValidation = _valFlexItem(val[2], 'FlexItems');
      if (resultValidation !== true) return resultValidation;
    }

    return true;

  }

  return {
    getType : _getType,
    trimArray : _trimArray,
    valBasic: _valBasic,
    valFlexKey : _valFlexKey,
    valFlexRemove : _valFlexRemove,
    valFlexItem : _valFlexItem,
    valItems : _valItems
  }

})
