angular.module('starter.controllers', [])//, function($httpProvider) {
  // Use x-www-form-urlencoded Content-Type
 /* $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
})*/
/*  .factory('Post', function($resource) {

    return $resource('http://127.0.0.1/rwgl/login',  {userName:'@userName',password:'@password'});

  })*/
  .controller('AppCtrl', function($scope, $ionicModal, $timeout,$http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    var userName=$scope.loginData.username;
    var password=$scope.loginData.password;
    console.log(userName+","+password);
    /*var req = {

      method: 'get',

      url: 'http://127.0.0.1/rwgl/login',

    headers: {
        //'Content-Type': 'application/json'
      //  'Content-Type': undefined
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'

      //  'Content-Type': 'application/json;charset=utf-8'

    },
      /!*params:{
        'require': $scope.loginData
      }*!/

     data: {userName:userName,password:password}

    };*/
    /* $http(req).success(function(da){
      console.log("s:"+da);
    }).error(function(d){
      console.log("e:"+d);
    });*/
    var param = function (obj) {
      var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

      for (name in obj) {
        value = obj[name];

        if (value instanceof Array) {
          for (i = 0; i < value.length; ++i) {
            subValue = value[i];
            fullSubName = name + '[' + i + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if (value instanceof Object) {
          for (subName in value) {
            subValue = value[subName];
            fullSubName = name + '[' + subName + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if (value !== undefined && value !== null)
          query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
      }

      return query.length ? query.substr(0, query.length - 1) : query;
    };
    var url = 'http://127.0.0.1/rwgl/login',
      data = {
        userName:userName,password:password
      },
      transFn = function(data) {
        return $.param(data);
      },
      postCfg = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}//,
      //  transformRequest: $.param(data)
      };

    $http.post(url, param(data), postCfg)
      .success(function(){
    console.log(1111111111);
        $scope.closeLogin();
      });


//Post.query({userName:userName,passwored:password});
   /* $http.post('http://127.0.0.1/rwgl/login',$scope.loginData)
      .success(function(){
        // some code
      });*/

  /*  $http.post('http://127.0.0.1/login', {userName:userName,passwored:password})

      .success(function(data, status, headers, config) {

        console.log("s:"+data);
// this callback will be called asynchronously

// when the response is available

      })

      .error(function(data, status, headers, config) {
        console.log("e:"+data);
        console.log("e:"+status);
        console.log("e:"+headers);
        console.log("e:"+config);
// called asynchronously if an error occurs

// or server returns response with an error status.

      });*/
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
   /* $timeout(function() {
      $scope.closeLogin();
    }, 1000);*/
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: '测试1', id: 1 },
    { title: '测试2', id: 2 },
    { title: '测试3', id: 3 },
    { title: '测试4', id: 4 },
    { title: '测试5', id: 5 },
    { title: '测试6', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
