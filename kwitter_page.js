
var firebaseConfig = {
      apiKey: "AIzaSyB8kCWqVhCkc2r--LUTR5nCnhaGMsb1UC0",
      authDomain: "kwitter-23f5c.firebaseapp.com",
      databaseURL: "https://kwitter-23f5c-default-rtdb.firebaseio.com",
      projectId: "kwitter-23f5c",
      storageBucket: "kwitter-23f5c.appspot.com",
      messagingSenderId: "1067874969131",
      appId: "1:1067874969131:web:4e428e9a3458ff478fac6e"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


   user_name=localStorage.getItem("user_name");
   room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
}