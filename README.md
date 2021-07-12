
<html>
    <head>
    <title>firebase crud</title>
    </head>
    <body>
    <center>
    <h1>Firebase CRUD Operation</h1>
    <br />
    <table border="1" style="border-collapse: collapse">
    <tr>
    <td>Name</td>
    <td><input id="name" type="text" /></td>
    </tr>
    <tr>
    <td>Roll Number</td>
    <td><input id="rollno" type="text" /></td>
    </tr>
    <tr>
    <td>Section</td>
    <td><input id="section" type="text" /></td>
    </tr>
    <tr>
    <td>Gender</td>
    <td><input id="gender" type="text" /></td>
    </tr>
    <tr>
    <td style="text-align: center; vertical-align: middle" colspan="2">
    <button id="insert">insert</button>
    </td>
    </tr>
    <tr>
    <td style="text-align: center; vertical-align: middle" colspan="2">
    <button id="select">select</button>
    </td>
    </tr>
    <tr>
    <td style="text-align: center; vertical-align: middle" colspan="2">
    <button id="delete">delete</button>
    </td>
    </tr>
    <tr>
    <td style="text-align: center; vertical-align: middle" colspan="2">
    <button id="update">update</button>
    </td>
    </tr>
    <tr>
    <td style="text-align: center; vertical-align: middle" colspan="2">
    <button id="clear">clear</button>
    </td>
    </tr>
    </table>
    </center>
    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-database.js"></script>
    <!-- TODO: Add SDKs for Firebase products that you want to use
    https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-analytics.js"></script>
    <script>
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
    apiKey: "AIzaSyDZdjxX6turFPBkN2_G1_2sG0BLPK_Fk4o",
    authDomain: "internal-6fbd5.firebaseapp.com",
    projectId: "internal-6fbd5",
    storageBucket: "internal-6fbd5.appspot.com",
    messagingSenderId: "306764692572",
    appId: "1:306764692572:web:1589e2dc167684c74a3a99",
    measurementId: "G-MVBXY40YTB"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var na, roll, sec, gen;
    function read() {
    na = document.getElementById("name").value;
    roll = document.getElementById("rollno").value;
    sec = document.getElementById("section").value;
    gen = document.getElementById("gender").value;
    }
    document.getElementById("insert").onclick = function () {
    read();
    firebase
    .database()
    .ref("StudentData/" + roll)
    .set({
    Name: na,
    SectionName: sec,
    Gender: gen,
    });
    };
    document.getElementById("select").onclick = function () {
    read();
    firebase
    .database()
    .ref("StudentData/" + roll)
    .on("value", function (data) {
    document.getElementById("name").value = data.val().Name;
    document.getElementById("section").value = data.val().SectionName;
    document.getElementById("gender").value = data.val().Gender;
    // console.log(na);
    // console.log(sec);
    // console.log(gen);
    });
    };
    document.getElementById("update").onclick = function () {
    read();
    firebase
    .database()
    .ref()
    .child("StudentData/" + roll)
    .set({
    Name: na,
    SectionName: sec,
    Gender: gen,
    });
    };
    document.getElementById("delete").onclick = function () {
    read();
    firebase
    .database()
    .ref()
    .child("StudentData/" + roll)
    .remove();
    };
    document.getElementById("clear").onclick = function () {
    document.getElementById("name").value = "";
    document.getElementById("rollno").value = "";
    document.getElementById("section").value = "";
    document.getElementById("gender").value = "";
    };
    </script>
    </body>
    </html>
