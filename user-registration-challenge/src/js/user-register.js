// Get reference to all elements in register tab
const registerTab = document.getElementsByClassName("register");
console.log(registerTab);
let registerTab1 = registerTab[0];
let registerTab2 = registerTab[1];

// Get reference to all elements in userList tab
const userTabs = document.getElementsByClassName("users");
console.log(userTabs);
let userTab1 = userTabs[0];
let userTab2 = userTabs[1];

/* --- Nav references --- */

//'View User List' button
const registerButton = () => {
    userTabs[0].style.display = "block";
    registerTab[0].style.display = "none";
    userTabs[1].style.display = "block";
    registerTab[1].style.display = "none";
};
document.getElementById("register-tab-button").addEventListener("click", registerButton);

//'Register User' button
const viewUserButton = () => {
    userTabs[0].style.display = "none";
    registerTab[0].style.display = "block";
    userTabs[1].style.display = "none";
    registerTab[1].style.display = "block";
};
document.getElementById("users-tab-button").addEventListener("click", viewUserButton);

//Register button shows user list
const submitButton = document.getElementById("register-submit");
const registerSubmit = (event) => {
    event.preventDefault();
    userTabs[0].style.display = "block";
    registerTab[0].style.display = "none";
    userTabs[1].style.display = "block";
    registerTab[1].style.display = "none";
};
submitButton.addEventListener("click", registerSubmit);


const users = [];

//first function
function createUser(event) {
    event.preventDefault();

    let firstname1 = document.getElementById("firstname").value;
    let lastname1 = document.getElementById("lastname").value;
    let username1 = document.getElementById("username").value;
    let email1 = document.getElementById("email").value;
    let password1 = document.getElementById("password").value;


    if (firstname1 !== "") {
        if (lastname1 == "") {
            alert("Kindly enter your Last Name!");
        } else if (username1 == "") {
            alert("Kindly enter your Username!");
        } else if (email1 == "") {
            alert("");
        } else if (password1 == "") {
            alert("Kindly enter a password!");
        } else {
            const newUser = {
                firstname: firstname1,
                lastname: lastname1,
                username: username1,
                email: email1,
                password: password1,
            };

            users.push(newUser);
            populateUserList(users);
        }
    } else {
        alert("Kindly enter your Registration Information ");
    }
}

submitButton.addEventListener("click", createUser);

//second function
function createUserElement(userParam, index) {
    let user1 = `
      <li class="entry" data-index="${index}">
        <span> ${userParam.username} </span>
        <span> ${userParam.firstname} </span>
        <span> ${userParam.lastname} </span>
        <span> ${userParam.email} </span>
        <span> ${userParam.password} </span>
      </li>
    `;
    return user1;
}

function populateUserList(usersparam) {
    let listElements = document.getElementsByClassName("entry");

    let elementLength = listElements.length;
    

    Array.from(listElements).forEach((el) => {
        el.remove();
    })

    for (let i = 0; i < usersparam.length; i++) {
        
        let user1 = createUserElement(usersparam[i], i);
        document.getElementById("user-list").innerHTML += user1;
        console.log(user1);
    }

    // Update data-index attributes
    listElements = document.getElementsByClassName("entry");
    Array.from(listElements).forEach((el, index) => {
        el.setAttribute("data-index", index);
        el.addEventListener("dblclick", (event) => {
            removeUser(event, index);
        });
    });
}


function removeUser(event, index) {
    const entry = event.target.parentNode;
    users.splice(index, 1);
    entry.parentNode.removeChild(entry);
    populateUserList(users);

    console.log(users);
}