var login = prompt("Enter your login", "");
var password
var adminPassword = "RootPass";
var userPassword = "UserPass";
var currentHour = new Date().getHours();

if (login === "" || login === "Esc") {
    alert ("Canceled");
} else if (login.length < 4) {
    alert ("I don't know any users having name length less than 4 symbols");
} else if (login !== "User" && login !== "Admin") {
    alert ("I don’t know you");
} else {
    password = prompt("Enter password");

  if (password === "" || password === "Esc") {
    alert ("Canceled");
  } else if (password === adminPassword && login === "Admin") {
    if (currentHour < 20) {
       alert("Good day, dear Admin!");
    } else {
       alert("Good evening, dear Admin!"); 
    }

  } else if (password === userPassword && login === "User") {
    if (currentHour < 20) {
        alert("Good day, dear User!");
     } else {
        alert("Good evening, dear User!"); 
     }

  } else {
      alert("Wrong password");
  }

}


