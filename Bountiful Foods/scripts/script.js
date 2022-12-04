function toggleNav() {
    document.getElementById("navigation").classList.toggle("open")
    document.getElementById("hamburger-menu-btn").classList.toggle("open")
}

const x = document.getElementById("hamburger-menu-btn")

x.onclick = toggleNav

