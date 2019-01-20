let object = {
	firstName: ko.observable("Erica"),
	lastName: ko.observable("Lehotzky")
};

object.fullName = ko.computed(function() {
	return object.firstName() + " " + object.lastName();
});

ko.applyBindings(object);