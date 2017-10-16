(function () {
  'use strict'

  angular.module("LunchChecker", [])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter'];
    function LunchCheckController($scope, $filter){
        $scope.food = "";
        $scope.message = "";
        $scope.lunchMessageColor = {};
        $scope.lunchTextBoxColor = {};

    function removeEmptyString(arr){
      for(var i = 0; i < arr.length; i++){
        if(arr[i] === "") {
          arr.splice(i, 1);
        }
      }
      return arr;
    }

    $scope.checkLunch = function(){
      $scope.lunch = $scope.food.split(",");
      $scope.lunch = $scope.lunch.map(Function.prototype.call, String.prototype.trim);
      $scope.lunch = removeEmptyString($scope.lunch);

          if ($scope.lunch.length === 0){
            $scope.message = "Please enter data first";
            $scope.lunchMessageColor.style = {"color":"red"};
            $scope.lunchTextBoxColor.style = {"border-color":"red"};
          }
          else if ($scope.lunch.length > 3){
            $scope.message = "Too much!";
            $scope.lunchMessageColor.style = {"color":"orange"};
            $scope.lunchTextBoxColor.style = {"border-color":"orange"};
          }
          else{
            $scope.message = "Enjoy!";
            $scope.lunchMessageColor.style = {"color":"green", "font-weight":"bold"};
            $scope.lunchTextBoxColor.style = {"border-color":"green"};
          }
      };
  }

})();
