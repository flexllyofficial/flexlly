angular.module('useAppFlex').directive('useAppFlexDirective', function($compile){
  return {
    link: function(scope, element, attr){
      $(element).on('click',function(event){

        if(!event.isPropagationStopped()){

          var toCallDynamicDirective = this.nodeName;
          alert(toCallDynamicDirective);

          var currentElement = angular.element(this);

          element.attr(toCallDynamicDirective + '-f', '');

          $compile(element)(scope);

          return false;

        }

      })
    }
  }
})
