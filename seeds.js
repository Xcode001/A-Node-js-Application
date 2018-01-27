var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{ 
		name: "Clouds Rest",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG4U1y4XDoFwu_qRH_zabMmpIrbDQ2kQSJ84cl5sk2Uu-Yo42j",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur."
	},
	{
		name: "Brin Gee",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBvfmxrtI0jq04WYolN_sX9pJ_VOK9VPwGrItxw0gjmU4cr31v",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur."
	},
	{
		name: "Canyon Floor",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjNLVBKKDfrwYC1OYfCHVIaL2SdABPGP8UO9SC7aKje3wObJcNw",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur."
	}
];

function seedDB() {
	Campground.remove({}, function(err){
		if(err){
			console.log(err);
		} else {
			console.log("removed campgrounds!");
		}
	});

	//add a few campgrounds
	data.forEach(function(seed){
		Campground.create(seed, function(err, campground){
			if(err){
				console.log(err);
			} else {
				console.log("added a campground");
				//Create a comment
				Comment.create({
					text: "This is great, but I wish there was internet",
					author: "Homer"
				}, function(err, comment){
					if(err){
						console.log(err);
					} else {
						campground.comments.push(comment);
						campground.save(); 
						console.log("Created New Comment")
					}
				});
			}
		});
	});
}

module.exports = seedDB;

