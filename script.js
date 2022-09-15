const postLoad = () => {
    console.log("hello world")

    const loginBtn = document.querySelector('#btn-login')
    loginBtn.onclick = () => {
        const usernameTxt = document.querySelector('#username').value
        const passwordTxt = document.querySelector('#password').value

        if (!usernameTxt) {
            alert('please enter username');
            return;
        } else if (usernameTxt.length < 3) {
            alert('username should have more than 3 characters');
            return;
        }

        if (!passwordTxt) {
            alert('please enter password');
            return;
        } else if (passwordTxt.length < 3) {
            alert('password should have more than 3 characters');
            return;
        }

        if (usernameTxt === "admin" && passwordTxt === "root") {
            location.href = "home.html"
        } else {
            alert('access denied');
        }


        console.log("you pressed me", usernameTxt, passwordTxt)
    }
}
window.onload = postLoad;