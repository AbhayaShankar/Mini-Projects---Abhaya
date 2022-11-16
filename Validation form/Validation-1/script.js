let myname = document.getElementById("name");
let mypassword = document.getElementById("password");
let myform = document.getElementById("myform");
let errorElement = document.getElementsByClassName("error");

// For name validation
myname.onblur = function () {
  if (myname.value === "" || myname == null) {
    myname.classList.add("invalid");
    document.getElementById("errorName").innerHTML = "Enter a valid Name";
  }
};
myname.onfocus = function () {
  myname.classList.remove("invalid");
  document.getElementById("errorName").innerHTML = "";
};

// For mail validation -->
let myemail = document.getElementById("email");
myemail.onblur = function () {
  if (!myemail.value.includes("@")) {
    myemail.classList.add("invalid");
    document.getElementById("errorMail").innerHTML = "'@' is missing ";
  }
};

myemail.onfocus = function () {
  myemail.classList.remove("invalid");
  document.getElementById("errorMail").innerHTML = "";
};

// For Password validation
mypassword.onblur = function () {
  if (mypassword.value.length <= 6) {
    mypassword.classList.add("invalid");
    document.getElementById("errorPassword").innerHTML =
      "Password should be longer than 6 characters";
  }

  if (mypassword.value.length > 20) {
    mypassword.classList.add("invalid");
    document.getElementById("errorPassword").innerHTML =
      "Password should be less than 20 characters";
  }
};

mypassword.onfocus = function () {
  mypassword.classList.remove("invalid");
  document.getElementById("errorPassword").innerHTML = "";
};

// EventListener Handler for Preventing submit if Some error pertains.
myform.addEventListener("submit", (e) => {
  if (errorElement.value.length > 0) {
    e.preventDefault();
  }
});
