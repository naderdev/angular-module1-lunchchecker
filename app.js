(function () {
  'use strict'

  angular.module("LunchChecker", [])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter'];
  function LunchCheckController($scope, $filter){
      $scope.food = "";
      $scope.message = "";
      $scope.lunchMessageStyle = {};
      $scope.lunchTextBoxStyle = {};

    function removeEmpty(arr){
      for(var i = 0; i < arr.length; i++){
        if(arr[i] === "") {
          arr.splice(i, 1);
        }
      }
      return arr;
    }

    $scope.check = function(){
      $scope.lunch = $scope.food.split(",");
      $scope.lunch = $scope.lunch.map(Function.prototype.call, String.prototype.trim);
      $scope.lunch = removeEmpty($scope.lunch);

          if ($scope.lunch.length === 0){
            $scope.message = "Please enter data first";
            $scope.lunchMessageStyle.style = {"color":"red"};
            $scope.lunchTextBoxStyle.style = {"border-color":"red"};
          }
          else if ($scope.lunch.length > 3){
            $scope.message = "Too much!";
            $scope.lunchMessageStyle.style = {"color":"orange"};
            $scope.lunchTextBoxStyle.style = {"border-color":"orange"};
          }
          else{
            $scope.message = "Enjoy!";
            $scope.lunchMessageStyle.style = {"color":"green", "font-weight":"bold"};
            $scope.lunchTextBoxStyle.style = {"border-color":"green"};
          }
      };
  }

})();
