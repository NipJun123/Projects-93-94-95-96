
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCaueN1l2VdKzf2_lQ92eazNEW33T1rHdo",
    authDomain: "project-95-b5f04.firebaseapp.com",
    databaseURL: "https://project-95-b5f04-default-rtdb.firebaseio.com",
    projectId: "project-95-b5f04",
    storageBucket: "project-95-b5f04.appspot.com",
    messagingSenderId: "450205680934",
    appId: "1:450205680934:web:0a90b9e9711559e6982de7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";
  
    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
         
  
          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
          
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room_name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div> <hr>";
     document.getElementById("output").innerHTML+=row;
  
    
    });});}
  getData();
  
  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
  }
  
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }
   
  
  