// Initialize Firebase

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDMBLjA7Gp20muOyjrx7creYIceYGSG950",
    authDomain: "rume-ea30a.firebaseapp.com",
    databaseURL: "https://rume-ea30a.firebaseio.com",
    projectId: "rume-ea30a",
    storageBucket: "rume-ea30a.appspot.com",
    messagingSenderId: "939299908389"
};
firebase.initializeApp(config);
var database = firebase.database();

var button = document.getElementById("my_button");
// button.addEventListener("click", check);

setInterval(check, 3000);

function check() {
    var information = document.getElementById("info");
    button.innerText = "Updated";
    var recents = firebase.database().ref('hodson211/');
    recents.once("value")
        .then(function(snapshot) {
            var inDatabase = false;
            if (snapshot.val() == 1) {
                inDatabase = true;
            }
            if (inDatabase) {
                information.innerText = "1";
            } else {
                information.innerText = "0";
            }
        });
}
