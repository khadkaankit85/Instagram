
let body = document.querySelector("body")
let theme = localStorage.getItem("theme")

//checking for previously saved theme
if (theme == "darkTheme") {
    body.classList.remove("light")
    body.classList.add("dark")
}
else {
    body.classList.add("light")
    body.classList.remove("dark")
}

export function changeTheme() {
    // console.log(body.classList)
    if (body.classList.contains("dark")) {
        body.classList.remove("dark")
        body.classList.add("light")
        localStorage.setItem("theme", "lightTheme")
        // console.log("dark removed and light added")
        return
    }
    else if (body.classList.contains("light")) {
        body.classList.remove("light")
        body.classList.add("dark")
        localStorage.setItem("theme", "darkTheme")


        // console.log("dark theme added and light removed")
        return

    }
}

