let object = {
	// firstName: ko.observable("Erica"),
	// lastName: ko.observable("Lehotzky"),
	friends: ko.observableArray([new Friend(new dbFriend())])
};

// object.fullName = ko.computed(function() {
// 	return object.firstName() + " " + object.lastName();
// });

// object.firstName.subscribe(function(value) {
// 	console.log("First Name has been changed");
// 	console.log(value);
// });

function dbFriend() {
	return {
		name: "Buddy",
		knowJS: true,
		favBook: "Gone Girl",
		isWeird: false
	}
}

function Friend(dbFriend){
	let map = ko.mapping.fromJS(dbFriend);
	map.removeFriend = function() {
		object.friends.remove(map);
	}
	return map;
}

// function Friend(name) {
// 	this.name = name;
// 	// default knowJS is false
// 	this.knowJS = ko.observable(false);
// 	this.favBook = ko.observable("");
// 	this.removeFriend = function() {
// 		object.friends.remove(this);
// 	}
// }

object.addFriend = function() {
	object.friends.push(new Friend(new dbFriend()));
}

ko.applyBindings(object);