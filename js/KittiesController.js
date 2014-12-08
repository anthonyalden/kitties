angular
	.module("kittiesApp")
	.controller("KittiesController", KittiesController);


	

	function KittiesController (){
			this.kittieArray = [
					{
						catName: 'Karl',
						monthsOld: 5,
						gender: 'boy',
						image: "images/carl.png",
						adopted: true,
					},
					{
						catName: 'Jack',
						monthsOld: 4,
						gender: 'boy',
						image: "images/jack.png",
						adopted: false
					},
					{
						catName: 'Oscar',
						monthsOld: 2,
						gender: 'boy',
						image: "images/oscar.png",
						adopted: false
					},
					{
						catName: 'Princess Mew',
						monthsOld: 3,
						gender: 'girl',
						image: "images/princessmew.png",
						adopted: false
					}

				]
		// exported functions
		this.adopted = adopted;
		this.unadopted=unadopted;

		// set adopted to true so that it toggle to right side of screen
		function adopted(kitten){
			kitten.adopted=true;
		}

		// set addopted to false so that it toggle to left side of screen
		function unadopted(kitten){
			kitten.adopted=false;
		}


	}

