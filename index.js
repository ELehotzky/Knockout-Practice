let object = {
	firstName: ko.observable("Erica"),
	lastName: ko.observable("Lehotzky")
};

// object.fullName = ko.computed(function() {
// 	return object.firstName() + " " + object.lastName();
// });

object.firstName.subscribe(function(value) {
	console.log("First Name has been changed");
	console.log(value);
});

ko.applyBindings(object);