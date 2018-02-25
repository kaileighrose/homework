// Validate data entry (age is required and > 0, relationship is required)
// Add people to a growing household list
// Remove a previously added person from the list
// Display the household list in the HTML as it is modified
// Serialize the household as JSON upon form submission as a fake trip to the server// your code goes here ...

// Get Form Data from DOM
	function getFormData(data) {
		console.log('the listener works');
		console.log(data);

	}
// Validate Data -- send error message if problem
	function validator(data) {

	}
// Serialize Data
	function serializer(argument) {
		// body...
	}
// Display Data if validateed
	function displayData(argument) {
		// body...
	}
// Add family member to list
	function addMember(argument) {
		// body...
	}
// Remove family member from list
	function removeMember(argument) {
		// body...
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
	});

	form.addEventListener("submit", function(event) {
		event.preventDefault();
		getFormData(this);
	});
	