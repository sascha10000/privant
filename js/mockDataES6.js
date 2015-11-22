class User {
    constructor(name, password, email, right, activated, profilePicture, shortDescription, registrationDate, lastOnline ){
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
}

// in the end this class only works with REST Calls (maybe in angular)
let usersInstance = null;
class Users {
    // peseudo singleton
    constructor(){
        if(usersInstance != null){
            return usersInstance;
        }
        
        this.users = [];
        
        usersInstance = this;
        return usersInstance;
    }

    register(user){
        this.users.push(user);
    }

    login(userName, password){
        if(this.findUserByName(userName).password != password){
            return false;
        }
        else {
            return true;
        }
    }

    // will be replaced by rest-calls
    findUserByName(userName, password){
        for(let i = 0; i < this.users.length; i++){
            if(this.users[i].name === userName){
                return this.users[i];
            }
        }
    }
}

var users = new Users();

var user = new User("Hans08", "dfhdf8wfewe9f0wef", "hans1976@web.de", "user", true, "unknown.png", "Hi ich bin der Hans", "01112015", "21112015 17:45");
users.register(user);