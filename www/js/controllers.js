angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  

  // --------------------- Pie Chart Configuration -----------------------------
  $scope.doughnutLabels = ["No Run", "Blocked", "Passed", "Failed"];
  $scope.doughnutData = [122, 635, 1023, 784];

  // --------------------- Line Chart Configuration ----------------------------
 
  $scope.barLabels = ["this is name of long project", "short name", "this is a medium sized name", "this is name of long project", "this is name of long project", "Short Name", "this is name of long project"];
  $scope.options = {
        responsive: true,
        maintainAspectRatio: false,
        barDatasetSpacing: 1,
        barShowStroke: true,
        barStrokeWidth : 2,
        barValueSpacing : 5,
        showTooltips: false
    };


  $scope.x = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.barSeries = ['Executed', 'Pending'];

  $scope.barData = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
// ---------Pie Chart---------------------
    
$scope.pieLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.pieData = [300, 500, 100];
    
$scope.pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        barDatasetSpacing: 1,
        barShowStroke: true,
        barStrokeWidth : 2,
        barValueSpacing : 5,
        showTooltips: false
    };

  
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, Chats, $stateParams) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('SocialCtrl', function($scope, Socials, $stateParams) {
  $scope.items = Socials.all();
})

.controller('AccountCtrl', function($scope, Accounts, $stateParams) {
  $scope.items = Accounts.all();
});
