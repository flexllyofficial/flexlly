angular.module('useAppFlex').directive('useAppFlexDirective', function($compile){
  return {
    link: function(scope, element, attr){
      $(element).on('click',function(event){

        if(!event.isPropagationStopped()){

          var oi = $(element).attr('aria-expanded');

          console.log(oi);
          if (oi === undefined) {

            var toCallDynamicDirective = this.nodeName;
            alert(toCallDynamicDirective);

            var currentElement = angular.element(this);

            element.attr(toCallDynamicDirective + '-action-menu', '');

            $compile(element)(scope);

            return false;

          }
        }
      })
    }
  }
})
