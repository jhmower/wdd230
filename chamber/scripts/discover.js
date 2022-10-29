// picture loading
let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
    if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
    }
    });
});
imagesToLoad.forEach((img) => {
    observer.observe(img);
});
} else {
imagesToLoad.forEach((img) => {
    loadImages(img);
});
}



// last visit
const visitDisplay = document.querySelector(".last-visit");
const today = Date.now();

let lastVisit = Number(window.localStorage.getItem("last-visit"));
let dateLastVisit = new Date(lastVisit)

if (lastVisit !== null) {
	visitDisplay.textContent = dateLastVisit;
} else {
	visitDisplay.textContent = `This is your first visit!`;
}

localStorage.setItem("last-visit", today);

