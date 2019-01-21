let object = {
	firstName: ko.observable("Erica"),
	lastName: ko.observable("Lehotzky"),
	friends: ko.observableArray([new Friend("Alanna"), new Friend("Jessica")])
};

// object.fullName = ko.computed(function() {
// 	return object.firstName() + " " + object.lastName();
// });

// object.firstName.subscribe(function(value) {
// 	console.log("First Name has been changed");
// 	console.log(value);
// });

function Friend(name) {
	this.name = name;
}

ko.applyBindings(object);