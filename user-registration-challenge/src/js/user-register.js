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
}
document.getElementById("register-tab-button").addEventListener("click", registerButton)

//'Register User' button
const viewUserButton = () => {
    userTabs[0].style.display = "none";
    registerTab[0].style.display = "block";
    userTabs[1].style.display = "none";
    registerTab[1].style.display = "block";
}
document.getElementById("users-tab-button").addEventListener("click", viewUserButton)


//Register button shows user list
const submitButton = document.getElementById("register-submit");

const registerSubmit = (event) => {
    event.preventDefault();
    userTabs[0].style.display = "block";
    registerTab[0].style.display = "none";
    userTabs[1].style.display = "block";
    registerTab[1].style.display = "none";
}

submitButton.addEventListener("click", registerSubmit)


const users = [];

let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");

function createUser() {
    const newUser = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password: password
    }
}

function createUserElement() {
    let user1 =
        `  
        <ul id="user-list">
            <li class="header">
                    <span>Username: ${username}</span> 
                    <span>Name: ${firstname}</span>
                    <span>Last Name: ${lastname}</span>
                    <span>Email Address: ${email}</span>
                    <span>Password: ${password}</span> 
            </li>
        </ul>
    `
    document.getElementById("users").innerHTML += user1;
    return user1;
}

function populateUserList() {
    for (let i = 0; i < users.length; i++) {
        createUserElement();
    }
}