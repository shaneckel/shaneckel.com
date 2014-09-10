angular.module('scotchTodo', ['todoController', 'todoService']);

angular.module('todoService', [])
  .factory('Todos', function($http) {
    return {
      get : function() {
        return $http.get('/api/todos');
      },
      create : function(todoData) {
        return $http.post('/api/todos', todoData);
      },
      update : function(id, todoData) {
        return $http.post('/api/todos/' + id , todoData);
      },
      delete : function(id) {
        return $http.delete('/api/todos/' + id);
      }
    }
  });

angular.module('todoController', [])
  .controller('mainController', function($scope, $http, Todos) {
    
    $scope.formData = {};
    
    Todos.get()
      .success(function(data) {
        $scope.todos = data;
        console.log(data);
      });
    
    $scope.createTodo = function() {
      Todos.create($scope.formData)
        .success(function(data) {
          $scope.formData = {}; 
          $scope.todos = data; 
        });
    };
    
    $scope.updateTodo = function(id, done, text) {    
 
      if(!done) done = true;
      else done = false;

      var todoData = {
        "done" : done,
        "text" : text
      }

      Todos.update(id, todoData)
        .success(function(data) {
          $scope.formData = {}; 
          $scope.todos = data; 
        }) 
    };

    $scope.deleteTodo = function(id) {
      Todos.delete(id)
        .success(function(data) {
          $scope.formData = {}; 
          $scope.todos = data; 
        });
    };

  });