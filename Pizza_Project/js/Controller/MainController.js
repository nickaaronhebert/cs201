app.controller('MainController', ['$scope', function($scope) {
    $scope.dinerName = "Italian Cuisine";
    $scope.cssClass = "";
    $scope.editText = false;
    $scope.editContent = false;
    $scope.today = new Date();
    $scope.courses = [
        {
            title: "Appetizers",
            items: [
                {
                    name: 'Toasted Gnocchi',
                    description: 'Fresh potato dumplings fried in olive oil and coated in a basil pesto.',
                    price: 3.95
                },
                {
                    name: 'Soup',
                    description: 'Your choice of Tomato Basil, Italian Wedding, Pancetta and Vegetable, or our soup of the day.',
                    price: 5.00
                },
                {
                    name: 'Chef\'s Salad',
                    description: 'Green salad with pepproccinis, olives, parmesan cheese, and our homemade Italian dressing.',
                    price: 3.25,
                    done: false
                }, 
                
            ]
           
            },
            {
                title: "Entrees",
                items: [
                    {
                        name: 'Chicken Fettuccine Alfredo',
                        description: 'Grilled Chicken seasoned with rosemary and oregano.  Served over fresh fettuccine tossed in a decadent cream sauce',
                        price: 11.95
                    },
                    {
                        name: 'Stuffed Chicken Marsala',
                        description: 'Chicken stuffed with herbs, cheese, and a house-made pesto.  Served with oven roasted fingerling potatoes',
                        price: 15.95
                    },
                    {
                        name: 'Spaghetti Bolgnese',
                        description: 'Our homemade pasta topped with a delicious tomato and meat sauce',
                        price: 10.95
                    }
                ]
            },
            {
                title: "Sides",
                items: [
                {
                    name: 'Toasted Gnocchi',
                    description: 'Fresh potato dumplings fried in olive oil and coated in a basil pesto.',
                    price: 3.95
                },
                {
                    name: 'Soup',
                    description: 'Your choice of Tomato Basil, Italian Wedding, Pancetta and Vegetable, or our soup of the day.',
                    price: 5.00
                },
                {
                    name: 'Chef\'s Salad',
                    description: 'Green salad with pepproccinis, olives, parmesan cheese, and our homemade Italian dressing.',
                    price: 3.25,
                    done: false
                }
                ]
            }
           
        ];

   //Edit Content View Enabled
   $scope.editEnabled = function() {
       $scope.editContent = true;
   };
   //Edit Content View Disabled
    $scope.editDisabled = function() {
       $scope.editContent = false;
   };
   //Edited Content is saved
    $scope.editSaved = function() {
       $scope.editDisabled();
   };
   
   //Changes color of either background or text
    $scope.setBackColor = function() {
        var colorHex = document.getElementById("colorhexDIV").textContent;
        if ($scope.editText === false) {
            angular.element($scope.cssClass).css('background-color', colorHex);
        }
        else {
            angular.element($scope.cssClass).css('color', colorHex);
        }
        console.log(colorHex);
        console.log($scope.cssClass);
   };
   
   //Sets the class that will be edited
    $scope.setClass = function(className, text) {
       $scope.cssClass = className;
       if (text)
       {
           $scope.editText = true;
       }
       else
       {
           $scope.text = false;
       }
   };
   $scope.AddMenuItem = function() {
       if ($scope.CourseInput == "Appetizers")
        {
        console.log("I am in the AddMenu-Appetizers");
        $scope.courses[0].items.push({name:$scope.DishInput, title:$scope.CourseInput, description:$scope.DescriptionInput, price:$scope.PriceInput, done:false});
        }
        if ($scope.CourseInput == "Entrees")
        {
        console.log("I am in the AddMenu-Entrees");
        $scope.courses[1].items.push({name:$scope.DishInput, title:$scope.CourseInput, description:$scope.DescriptionInput, price:$scope.PriceInput, done:false});
        }
        if ($scope.CourseInput == "Sides")
        {
        console.log("I am in the AddMenu-Sides");
        $scope.courses[2].items.push({name:$scope.DishInput, title:$scope.CourseInput, description:$scope.DescriptionInput, price:$scope.PriceInput, done:false});
        }
        
    };
    $scope.AddToBillAppetizers = function() {
        console.log("I am running");
        var oldList = $scope.courses[0].items;
        var total_cost = 0;
        for(var i = 0; i < oldList.length;i++)
        {
            var number = parseFloat($scope.courses[0].items[i].price);
            
            console.log(number);
            console.log( $scope.courses[0].items[i].price);
            total_cost = total_cost +  number;
            console.log(total_cost);

        }
        angular.forEach(oldList, function(x) {
            if (x.done) $scope.courses[0].items.push(x);
            console.log($scope.courses[0].items);
        });
    };
}]);