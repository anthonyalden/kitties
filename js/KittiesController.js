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

		this.adopted = adopted;
		this.unadopted=unadopted;

		function adopted(kitten){
			kitten.adopted=true;
		}

		function unadopted(kitten){
			kitten.adopted=false;
		}


	}

