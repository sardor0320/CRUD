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
let confirmPassword = document.getElementById('confirm-password')

function register() {
    if (password.value == confirmPassword.value) {
        let users = JSON.parse(localStorage.getItem('users'))
        let user = users.find(user => user.email == email.value && user.password == password.value)
        if (user == undefined) {
            users.push({
                id: users.length + 1,
                users: "user",
                email: email.value,
                password: password.value
            })
            document.getElementById('toast-register').classList.remove('hidden')
            setTimeout(() => {
                localStorage.setItem('users', JSON.stringify(users))
                document.getElementById('toast-register').classList.add('hidden')
                window.location.href = "login.html"
            }, 2000)
        }
    } else {
        document.getElementById('toast-error').classList.remove('hidden')
        setTimeout(() => {
            document.getElementById('toast-error').classList.add('hidden')
        }, 2000)
    }
}