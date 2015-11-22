// manages and represents a single Event
function Event(title, description, city, date, createdBy, private, createdAt, maxUser){
    this.title = title;
    this.description = description;
    this.city = city;
    this.date = date;
    this.createdBy = createdBy;
    this.users = []; // list of attending users
    this.private = private;
    this.createdAt = createdAt;
    this.maxUser = maxUser;
    this.waitingList = []; // list of registered but not attending users
    this.participantList = []; // if the event is private the allowed users will be provided here
    
    // checks if user can/may attend or not
    this.attend = function(user){
        if(this.private === true && this.findParticipantByName(user.name) == undefined){
            return "private";
        }
        
        // if the maxUser is reached, the user will be pushed on the waitinglist
        if(this.users.length >= this.maxUser){
            this.waitingList.push(user);
            return "waiting";
        }
        else {
            this.users.push(user);
            return "attending";
        }
    }
    
    this.addParticipant = function(user){
        this.participantList.push(user);
    }
    
    this.findParticipantByName = function(userName){
        for(var i = 0; i < this.participantList.length; i++){
            if(this.participantList[i].name === userName){
                return this.participantList[i];
            }
        }
        
        return undefined;
    }
}

// manages all events
function Events(){
    this.events = [];
    
    this.add = function(event){
        this.events.push(event);
    };
}