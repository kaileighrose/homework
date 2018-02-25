// Validate data entry (age is required and > 0, relationship is required)
// Add people to a growing household list
// Remove a previously added person from the list
// Display the household list in the HTML as it is modified
// Serialize the household as JSON upon form submission as a fake trip to the server// your code goes here ...

// Store Family Data for Session in hash
	var family = {};

// Get Form Data from DOM
	function getFormData(data) {
		console.log('the listener works');
		console.log(data);

	}
// Validate Data -- send error message if problem
	function validator(data) {

	}
// Serialize Data and Display in Debug Element
	function serializer() {
		// body...
	}
// Display Data in household list if validateed
	function displayData() {
		var list = document.getElementsByClassName("household");
		if (family.length > 0) {
			console.log("went into has family");
			Object.keys(family).forEach(function(id) {

			})
		} else {
			list[0].innerHTML = "<h4>Add a family member to your household to see them here</h4>";
		}
	}
// Add family member to list
	function addMember(argument) {
		// body...
	}
// Remove family member from list
	function removeMember(id) {
		delete family[id.toString()];
		displayData();
	}
// Puts it all together for execution
	function familyManager(argument) {
		// body...
	}
// DOM Listeners
	var form = document.querySelector('form');

	form.addEventListener("add", function(event) {
		event.preventDefault();
		getFormData(this);
		displayData();
	});

	form.addEventListener("submit", function(event) {
		event.preventDefault();
		getFormData(this);
		displayData();
	});
	