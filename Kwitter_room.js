// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtiH3kOMl2O_Ts0POcr--UGKf8qjLUeyA",
    authDomain: "lets-chat-web-app-b6324.firebaseapp.com",
    projectId: "lets-chat-web-app-b6324",
    storageBucket: "lets-chat-web-app-b6324.appspot.com",
    messagingSenderId: "733120165752",
    appId: "1:733120165752:web:87ed08055678310a1bba8d"
  };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();