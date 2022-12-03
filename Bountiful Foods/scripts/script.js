function toggleNav() {
    document.getElementById("navigation").classList.toggle("open")
    document.getElementById("hamburger-btn").classList.toggle("open")
}

const x = document.getElementById("hamburger-btn")

x.onclick = toggleNav

