var mod = angular.module("ngDefaultToValue", []);

mod.directive("defaultToValue", function() {
  return {
    restrict: "A",
    scope: {
      model: "=ngModel",
      value: "@defaultToValue"
    },
    link: function(scope, element, attrs) {
      var v = scope.value || attrs.value;
      if ("undefined" === typeof v || v === "") {
        return;
      }

      if (attrs.ngModel) {
        scope.model = v;
      }
    }
  };
});
