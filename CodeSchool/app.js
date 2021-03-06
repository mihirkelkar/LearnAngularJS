//1)AngularJS apps are defined as all separate modules which are interdependant on one another. 
//So, the first thing we do is define a one big module for the entire app. 
//and import this app.js file into the main codeschool_one.html file. 
//Also wrap your whole application in a closure called function(){ all app here} ();
(function(){
var app = angular.module('store', [ ]);

//4Now go ahead and describe your store controller, this will provide data to the 
//part of the page that requires it. 
//The first parameter that we pass in to the controller is a string
//The second parameter is an anonymous function. The code is the anonymous function is what will
//get executed when we call this string StoreController

app.controller('StoreController', function(){
 //Declare the gem as a property of the controller
 this.product = gem;
});
//4Now lets make a gem
//5 Lets add another property to the gem called canpurchase. 
//Now lets add the property to the gem called soldout
//Now lets add a few more elements to the cart. 
var gem = [{ name : 'Unobtainum', price : 20000, desc : "Found on the planet of Pandora, Unobtainum is used to make clean energy", 
canpurchase : true, soldout : false}, 
			{ name : 'Californix', price : 2900000, desc : "Extracts from the California region on the Mother Planet. Extremely rare. ", 
canpurchase : false, soldout : true}, 
{ name : 'Burgium', price : 29, desc : "Used to make burgers", 
canpurchase : false, soldout : false}
];
})();
