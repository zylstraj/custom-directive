'use strict';

// const angular = require('angular');

const app = angular.module('DirectiveApp', []);

app.directive("navBar", function() {
  return {
    restrict: 'A',
    template: '<header><h1>Blog</h1></header>',
    replace: true
}
})
app.directive("searchResult", function() {
  return {
    restrict: 'E',
    template: '<p>This is the good life</p>',
    replace: true
  }
})
app.directive("mainInfo", function() {
  return {
    restrict: 'E',
    template: '<p>This is the paragraph all about everything happening in my life. This is the story all about how, my life got flipped, turned upside down... Take a minute, just wait right there. . . Town called Belaire</p>',
    replace: true
  }
})
app.directive('selectAllFocus', function() {
  return {
    restrict: 'A',
    scope: {},
    link: function($scope, element, attrs) {
      element.mouseup(function(event) {
        event.preventDefault();
      })
      element.focus(function() {
        element.select();
      })
    }
  }
})

app.directive("myBusiness", function() {
  return {
    restrict: 'E',
    template: '<footer>I Am Josh</footer>',
    replace: true
}
})
// app.directive('addColor', function(){
//   var colorAdd = function(scope, element, attributes) {
//     var firstChild = element.children();
//     $(firstChild).on('click', function() {
//       $(this).css({"background-color": "blue"})
//     });
//   };
//   link: function(scope, elements, attrs) {
//     var childP = element.children()[0];
//     $(childP).on('click', function() {

//     })
//   }
//   };
// });

// app.directive("newDay", function() {
//   return {
//     restrict: 'E',
//     template: '<h1 class="pizza">Pizza</h1>',
//     replace: true,
//     scope: {
//       pizzaTopping: 'Pepperoni'
//     },
//     link: function(scope, elements, attrs) {
//       if (scope.pizzaTopping == 'Pepperoni') {
//           elements.removeAttr('class');
//   }
// }
// }
// })

