//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, 
//and another key of age with the value being your age. Then alert your name using dot notation.

var me = {
  Name: 'michael',
  Age: 25
}

alert(me.Name);




//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: 
//band, food, person, book, movie, holiday. 
//Have the values to those keys be your favorite thing in that category.

var favoriteThings = {
  band: "Gang Starr",
  food: "Chinese Food",
  person: "Federer",
  book: "Atlas Shrugged",
  movie: "Nightmare Before Xmas",
  holiday: "Xmas"
}


//After you've made your object, add another key named 'car' with the value being your favorite car 
//and then another key named 'brand' with the value being your favorite brand.

favoriteThings["car"] = "Subaru";
favoriteThings["brand"] = "REI";


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

favoriteThings["food"] = "Lettuce";
favoriteThings["book"] = "50 Shades of Gray";




//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

var backPack = {}

var item = "firstPocket";

backPack["item"] = "chapstick";

backPack.color = "black";

//After you do the above, alert your entire backPack object.

  alert(backPack)

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  console.log(backPack)




//NEXT PROBLEM




//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, 
//hairColor. Fill those properties in with the appropriate values.

var me = {
  name: 'michael',
  age: 25,
  height: '6 feet',
  gender: 'male',
  married: 'yes',
  eyeColor: 'blue',
  hairColor: 'blond',
}

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

for(var key in me) {
  alert(me[key]);
}


//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, 
//with the values being the length of each song.

var album = {
  Change: "2 minutes",
  Remain: "3 minutes",
  Stay: "4 minutes",
  DontGo: "5 minutes",
  PleaseStay: "6 minutes",
}

//Now, loop through your album object alerting every song title individually.

for(var key in album) {
  alert(key);
}




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values 
//being their population (doesn't have to be accurate).

var states = {
  Utah: 3000000,
  Colorado: 5000000,
  NewMexico: 2000000,
  Arizona: 10000000,
  Wyoming: 10000,
}

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

for(var key in states) {
  if(states[key] > 30000) {
    alert(key);
  }
  else if(states[key] < 30000) {
    alert("This State Sucks");
  }
}




//NEXT PROBLEM




var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

for (var key in user) {
  if (!user[key]) {
    delete (user[key]);
  }
}

//Once you get your truthy Object, Change the remaining values in the object to be specific to you 
//(name: 'your name', username: 'your username'), rather than my information.

user['name'] = 'Michael';
user['pwHash'] = "some Random Password";
user['username'] = "kannermichael";


//NEXT PROBLEM




var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

user['name'] = 'Tyler S. McGinnis';
user['email'] = "tyler.mcginnis@devmounta.in";

//Now call the sayName method that's on the user object which will alert the users email

user.sayName();


//NEXT PROBLEM




//Create an empty object called methodCollection.

var methodCollection = {}

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

methodCollection["alertHello"] = function(){
            alert("hello");
        };
methodCollection["logHello"] = function() {
            console.log("hello");
};

//Now call your alertHello and logHello methods.

methodCollection.alertHello()
methodCollection.logHello()



//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters 
//and returns a new object with all of the information that you passed in.

var MakePerson = function(name, birthday, ssn) {
  return arguments = {
    name: "Michael",
    birthday: "August 29th",
    ssn: "Yeah F***** Right",
  }
}


//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to make a 
//Credit Card object and returns that object so that whenever you invoke MakeCard, 
//you get a brand new credit card.

var MakeCard = function(name, number, expiration, cvv) {
  return {
    name: name,
    number: number,
    expiration: expiration,
    cvv: cvv,
  }
}
MakeCard('Michael', 12345, "08/29", 123);
  
  
  
//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   
   Now, create a bindCard function that takes in a person object as its first parameter and 
   a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains 
   all the properties from the person as well as the creditcard.
*/


var MakePerson = function(name, birthday, ssn) {
  return arguments = {
    name: name,
    birthday: birthday,
    ssn: ssn,
  }
}
var people = MakePerson("Michael", "August 29th", "Yeah F***** Right");

var MakeCard = function(name, number, expiration, cvv) {
  return {
    nameM: name,
    number: number,
    expiration: expiration,
    cvv: cvv,
  }
}
var cardStuff = MakeCard('Michael', 12345, "08/29", 123);

var bindCard = function(MakePerson, MakeCard) {
    var newObj = {}
    for(var key in MakePerson) {
      newObj[key] = MakePerson[key]
    }
    for(var key in MakeCard) {
      newObj[key] = MakeCard[key]
    }
  return newObj
}

bindCard(people, cardStuff)

