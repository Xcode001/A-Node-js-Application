#YelpCamp

#Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!

#Show Page
* Review the Restful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop
* Add a show route/template

#Refractor Mongoose Code
* Create a models directory
* Use module.exports
* Require exverything correctly

#Add Seeds file
* Add a seeds.js file
* Run the seeds file everytime the server starts

#Add the Comments Model
* Make our errors go away!
* Display comments on campground show page!

#Style Show Page
* Add sidebar to show page
* Display comments nicely

#Finish Styling Show Page
* Add public directory
* Add custom stylesheet

#Add User Model
* Install all packages needed for auth
* Define User model

##Auth Pt.2 - Register
* Configure passport
* Add register routes
* Add register template 

#Auth Pt. 4 - logout/Navbar
* Add layout route
* Prevent user from adding a comment if not signed in
* Show/hide auth links correctly

#Auth Pt. 5 Show/Hide Links
* Show/hide auth links in navbar correctly

##Refractor The Routes
* Use Express router to recognise all routes

##Users + Comments
* Associate users and comments
* Save Author's name to a comments automatically

##Users + Comments
* Prevent an unauthenticated user from creating a campground
* Save username + id to newly created campground

## Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add link to Edit Page
* Add Update Route
* Fix $Set Problem

##Deleting Campgrounds
* Add Destroy Route
* Add Delete button

##Authorisation/Permissions
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

##Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

##Deleting Comments
* Add destroy route
* Add delete button

##Authorisation Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refractor Middleware

##Adding in final
* Demo working version
* Install and configure connect_flash
* Add bootstrap alerts to header

RESTFUL ROUTES
name 	url 		verb			desc.
==================================================
INDEX   /dogs		 GET		Display a list of all dogs
NEW 	/dogs/new 	 GET		Displays form to create a new dog
CREATE  /dogs		 POST		Add new dog to DB
SHOW 	/dogs/:id  	 GET 		Shows info about one dog

