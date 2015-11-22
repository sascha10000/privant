"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function User(name, password, email, right, activated, profilePicture, shortDescription, registrationDate, lastOnline) {
    _classCallCheck(this, User);

    this.name = name;
    this.passowrd = password;
    this.email = email;
    this.right = right;
    this.activated = activated;
    this.profilePicture = profilePicture;
    this.shortDescription = shortDescription;
    this.registrationDate = registrationDate;
    this.lastOnline = lastOnline;
}

// in the end this class only works with REST Calls (maybe in angular)
;

var usersInstance = null;

var Users = (function () {
    // peseudo singleton

    function Users() {
        _classCallCheck(this, Users);

        if (usersInstance != null) {
            return usersInstance;
        }

        this.users = [];

        usersInstance = this;
        return usersInstance;
    }

    _createClass(Users, [{
        key: "register",
        value: function register(user) {
            this.users.push(user);
        }
    }, {
        key: "login",
        value: function login(userName, password) {
            if (this.findUserByName(userName).password != password) {
                return false;
            } else {
                return true;
            }
        }

        // will be replaced by rest-calls
    }, {
        key: "findUserByName",
        value: function findUserByName(userName, password) {
            for (var i = 0; i < this.users.length; i++) {
                if (this.users[i].name === userName) {
                    return this.users[i];
                }
            }
        }
    }]);

    return Users;
})();

var users = new Users();

var user = new User("Hans08", "dfhdf8wfewe9f0wef", "hans1976@web.de", "user", true, "unknown.png", "Hi ich bin der Hans", "01112015", "21112015 17:45");
users.register(user);