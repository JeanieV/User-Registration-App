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
document.getElementById("register-tab-button").addEventListener("click", registerButton);


//'Register User' button
const viewUserButton = () => {
    userTabs[0].style.display = "none";
    registerTab[0].style.display = "block";
    userTabs[1].style.display = "none";
    registerTab[1].style.display = "block";
}
document.getElementById("users-tab-button").addEventListener("click", viewUserButton);


//Register button shows user list
const submitButton = document.getElementById("register-submit");
const registerSubmit = (event) => {
    event.preventDefault();
    userTabs[0].style.display = "block";
    registerTab[0].style.display = "none";
    userTabs[1].style.display = "block";
    registerTab[1].style.display = "none";
}
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

    const newUser = {
        firstname: firstname1,
        lastname: lastname1,
        username: username1,
        email: email1,
        password: password1
    }

    users.push(newUser);
    populateUserList(users);
    
    if (firstname1 !== "") {

        if (lastname1 == "") {
            alert("Kindly enter your Last Name!");
    
        }
        else if (username1 == "") {
            alert("Kindly enter your Username!");
        }
        else if (email1 == "") {
            alert("Kindly enter your email!");
        }
        else if (password1 == "") {
            alert("Kindly enter a password!");
        }
       
    }
    else{
        alert("Kindly enter your Registration Information ");
    }
}

submitButton.addEventListener("click", createUser);



//second function
function createUserElement(userparam) {
    let user1 =
        `
            <li class="entry" ondblclick="removeUser(this)">
                    <span> ${userparam.username} </span>
                    <span> ${userparam.firstname} </span>
                    <span> ${userparam.lastname} </span>
                    <span> ${userparam.email} </span>
                    <span> ${userparam.password} </span>
            </li>
    `
    return user1;
}


//third function
function populateUserList(usersparam) {
    let listElements = document.getElementsByClassName("entry");
    let elementLength = listElements.length;

    if (users.length == 0) {
        alert("ja");
        for (let i = 0; i < elementLength; i++) {
            listElements[i].remove();
        }
    }
    else {
        for (let i = elementLength; i < usersparam.length; i++) {
            let user1 = createUserElement(usersparam[i]);
            document.getElementById("user-list").innerHTML += user1;
            console.log(user1);
        }
    }
}

function removeUser(listParam) {
    console.log(listParam.children);
    console.log(listParam.children[3]);

    let check = listParam.children[3].innerHTML.trim();

    for (let i = 0; i < users.length; i++) {
        console.log("Here");
        console.log(users[i].email);
        console.log(check);

        if (users[i].email == check) {
            alert("hey");
            users.splice(i, 1);

        }
        else { }
    }
    console.log(users)
    populateUserList(users);
}

