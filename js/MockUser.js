// represents a single User
function User(name, password, email, right, activated, profilePicture, shortDescription, registrationDate, lastOnline) {
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

// manages all Users (not needed when using a REST-API)
function Users(){
    this.users = [];
    
    this.add = function(user){
        this.users.push(user);
    };
    
    this.findUserByName = function(userName){
        for(var i = 0; i < this.users.length; i++){
            if(this.users[i].name === userName){
                return this.users[i];
            }
        }
        
        return undefined;
    };
    
    this.iterate = function(callback){
        for(var i = 0; i < this.users.length; i++){
            callback(this.users[i]);
        }
    }
}