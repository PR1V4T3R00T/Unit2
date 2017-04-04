(function(){
	var app = angular.module('store', []);

	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'fugit doloribus facere in veniam possimus inventore esse nam quod! Error!'
	}

	app.controller('StoreController', function(){
		this.product = gem;
	});
})();