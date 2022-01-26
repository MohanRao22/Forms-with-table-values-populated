document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();
    var firstName = document.getElementById("first-name").value;
    window.localStorage.setItem(firstName, `${firstName}`);
    var lastName = document.getElementById("last-name").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.getElementsByName("gender");
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gender = gender[i].value;
        }
    }
    var food = document.getElementById("choice1").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    console.log(gender);


    // console.log(food);
    // console.log(state);
    // console.log(country);
    validation(firstName, lastName, address, pincode, gender, food, state, country);
    console.log(err);

    if (err == 0) {
        displayData(firstName, lastName, address, pincode, gender, food, state, country);
    }

});
var err = 0;

function validation(firstName, lastName, address, pincode, gender, food, state, country) {
    err = 0;

    if (firstName.length == 0) {
        document.querySelector(".err-first").innerText = "Username Cannot be Empty";
        document.querySelector(".err-first").style.color = "red";
        document.querySelector(".err-first").style.fontSize = "17px";
        document.querySelector("#first-name").style.border = "2px solid red";
        document.querySelector("#first-name").focus();
        err++;
    } else if (firstName.length < 4) {
        document.querySelector(".err-first").innerText = "Username must be greater than 3 characters";
        document.querySelector(".err-first").style.color = "red";
        document.querySelector(".err-first").style.fontSize = "17px";
        document.querySelector("#first-name").style.border = "2px solid red";
        document.querySelector("#first-name").focus();
        err++;
    } else if (firstName.split("").forEach((firstName) => {
            console.log(firstName.charCodeAt());
            if (firstName.charCodeAt() > 47 && firstName.charCodeAt() < 58) {
                document.querySelector(".err-first").innerText = "Username canot accept numbers";
                document.querySelector(".err-first").style.color = "red";
                document.querySelector(".err-first").style.fontSize = "17px";
                document.querySelector("#first-name").style.border = "2px solid red";
                document.querySelector("#first-name").focus();
                err++;
            }
        }));


    if (lastName.length == 0) {
        document.querySelector(".err-last").innerText = "Username Cannot be Empty";
        document.querySelector("#last-name").style.border = "2px solid red";
        document.querySelector(".err-last").style.color = "red";
        document.querySelector(".err-last").style.fontSize = "17px";
        document.querySelector("#last-name").focus();
        err++;
    } else if (lastName.length < 1) {
        document.querySelector(".err-last").innerText = "Username must be greater than 1 characters";
        document.querySelector("#last-name").style.border = "2px solid red";
        document.querySelector(".err-last").style.color = "red";
        document.querySelector(".err-last").style.fontSize = "17px";
        document.querySelector("#last-name").focus();
        err++;
    }

    if (address.length == 0) {
        document.querySelector(".err-address").innerText = "Address Cannot be Empty";
        document.querySelector("#address").style.border = "2px solid red";
        document.querySelector(".err-address").style.color = "red";
        document.querySelector(".err-address").style.fontSize = "17px";
        document.querySelector("#address").focus();
        err++;
    } else if (address.length < 5) {
        document.querySelector(".err-address").innerText = "Address must be greater than 5 characters";
        document.querySelector("#address").style.border = "2px solid red";
        document.querySelector(".err-address").style.color = "red";
        document.querySelector(".err-address").style.fontSize = "17px";
        document.querySelector("#address").focus();
        err++;
    }

    if (pincode.length == 0) {
        document.querySelector(".err-pincode").innerText = "Pincode Cannot be Empty";
        document.querySelector("#pincode").style.border = "2px solid red";
        document.querySelector(".err-pincode").style.color = "red";
        document.querySelector(".err-pincode").style.fontSize = "17px";
        document.querySelector("#pincode").focus();
        err++;
    } else if (pincode.length >= 7) {
        document.querySelector(".err-pincode").innerText = "Pincode must be not greater than 6 numbers";
        document.querySelector("#pincode").style.border = "2px solid red";
        document.querySelector(".err-pincode").style.color = "red";
        document.querySelector(".err-pincode").style.fontSize = "17px";
        document.querySelector("#pincode").focus();
        err++;

    } else {

    }


    if (pincode.split("").map((val) => {
            var value = isNaN(val);
            if (value) {
                document.querySelector(".err-pincode").innerText = "Pincode Cannot be text";
                document.querySelector(".err-pincode").style.color = "red";
                document.querySelector(".err-pincode").style.fontSize = "17px";
                document.querySelector("#pincode").focus();
                err++;
            }
        }));








}

//  to display data in table

function displayData(firstName, lastName, address, pincode, gender, food, state, country) {
    document.getElementById("form-data-collection").innerHTML += `
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${address}</td>
    <td>${pincode}</td>
    <td>${gender}</td>
    <td>${food}</td>
    <td>${state}</td>
    <td>${country}</td>
    </tr> `;
    console.trace(country);
    document.getElementById("submit").innerText = "Add";

    clear();
}


function clear() {
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("pincode").value = "";
    document.querySelector(".gender").checked = false;
    var choice = document.getElementById("choice1").value;
    choice.selected = 0;
    document.getElementById("state");
    document.getElementById("Country");
    // ,,,,,,,,,,,,,
    document.querySelector(".err-first").innerText = " ";
    document.querySelector("#first-name").style.border = "0px solid red";
    document.querySelector(".err-last").innerText = " ";
    document.querySelector("#last-name").style.border = "0px solid red";
    document.querySelector(".err-pincode").innerText = " ";
    document.querySelector("#pincode").style.border = "0px solid red";
    document.querySelector(".err-address").innerText = " ";
    document.querySelector("#address").style.border = "0px solid red";

    document.getElementById("submit").innerText = "Added Successfully";
    document.getElementById("submit").style.backgroundColor = "#a10bff";
    setInterval(() => {
        show();
    }, 1500);

}

function show() {
    document.getElementById("submit").style.transition = "3s";
    document.getElementById("submit").innerText = "Add Data";

    document.getElementById("submit").style.backgroundColor = "red";
}


// var sec;
setInterval(() => {
    var timer = document.querySelector(".timer");
    var time = new Date();
    var hr = time.getHours();
    if (hr >= 13) {
        hr = hr - 12;
        if (hr > 0 && hr < 10) {
            hr = `0${hr}`;
        }
    } else if (hr > 0 && hr < 10) {
        hr = `0${hr}`;
    }
    var mm = time.getMinutes();
    if (mm > 0 && mm < 10) {
        mm = `0${mm}`;
    }
    var sec = time.getSeconds();
    if (sec > 0 && sec < 10) {
        sec = `0${sec}`;
    }
    timer.innerText = `${hr}:${mm}:${sec}`;

}, 1000)


let width = screen.width;
console.log(width);

if (width > 270 && width < 1001) {
    document.querySelector("table").setAttribute("class", "table table-dark table-responsive");
}

// setInterval(() => {
//     console.log("I am setInterval Method will called 1 sec everytime");
// }, 1000);