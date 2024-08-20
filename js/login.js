let userData = [
    {
        id: 1,
        users: 'admin',
        email: "admin@gmail.com",
        password: "Dilshod"
    },
    {
        id: 2,
        users: 'user',
        email: "user@gmail.com",
        password: "123"
    },
    {
        id: 3,
        users: 'user',
        email: "user@gmail.com",
        password: "1234"
    }
]
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(userData));
}

let email = document.getElementById('email')
let password = document.getElementById('password')

function login() {
    let users = JSON.parse(localStorage.getItem('users'))
    let user = users.find(user => user.email == email.value && user.password == password.value && user.users == "user")
    let admin = users.find(user => user.email == email.value && user.password == password.value && user.users == "admin")
    console.log(admin);
    console.log(user);
    if (user) {
        
        document.getElementById('toast-login').classList.remove('hidden')
        setTimeout (() => {
            document.getElementById('toast-login').classList.add('hidden')
            window.location.href = "index.html";
        },2000)
        
    } else if (admin) {
        window.location.href = "index.html";
    }else{
        document.getElementById('toast-error').classList.remove('hidden')
        setTimeout (() => {
            document.getElementById('toast-error').classList.add('hidden')
        },2000)
    }

}