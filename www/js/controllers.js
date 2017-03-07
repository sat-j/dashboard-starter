angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {

    Chart.defaults.global.defaultFontColor = '#666';
 


    // --------------------- Doughnut Chart Configuration -----------------------------
    $scope.doughnutLabels = ["No Run", "Blocked", "Passed", "Failed"];
    $scope.doughnutData = [122, 635, 1023, 784];
    $scope.doughnutOptions = {
        responsive: true,
        maintainAspectRatio: false,
        barDatasetSpacing: 1,
        barShowStroke: true,
        barStrokeWidth: 2,
        barValueSpacing: 5,
        showTooltips: false,
        legend: {
            display: true,
            position: 'top'
        }
    };

    // --------------------- Line Chart Configuration ----------------------------

    $scope.barLabels = ["this is name of long project", "short name", "this is a medium sized name", "this is name of long project", "this is name of long project", "Short Name", "this is name of long project"];
    for (i = 0; i < $scope.barLabels.length; i++) {
        console.log(i)
    }
    $scope.colours = [
        { // Red                    
            fillColor: 'rgba(168,0,0,0.6)',
            strokeColor: 'rgba(96,0,0,1)',
            pointColor: 'rgba(96,0,0,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(96,0,0,0.8)'
        }]

    $scope.options = {
        responsive: true,
        maintainAspectRatio: false,
        barDatasetSpacing: 1,
        barShowStroke: true,
        barStrokeWidth: 2,
        barValueSpacing: 5,
        showTooltips: false,
        legend: {
            display: true,
            position: 'top'
        },
        scales: {
            xAxes: [{
                ticks: {
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90
                }
                    }]
        }
    };

    $scope.barSeries = ['Executed'];

    $scope.barData = [
    [65, 59, 80, 81, 56, 55, 40]

  ];
    // ---------Pie Chart---------------------

    $scope.pieLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.pieData = [300, 500, 100];

    $scope.pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        barDatasetSpacing: 1,
        barShowStroke: true,
        barStrokeWidth: 2,
        barValueSpacing: 5,
        showTooltips: false,
        legend: {
            display: true,
            position: 'top'
        }
    };


})

.controller('ChatsCtrl', function ($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function ($scope, Chats, $stateParams) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('SocialCtrl', function ($scope, Socials, $stateParams) {
    $scope.items = Socials.all();
})

.controller('AccountCtrl', function ($scope, Accounts, $stateParams) {
    $scope.items = Accounts.all();
});