window.onload = () => {
  const images = 
    document.querySelectorAll(".instacode-swap-image");
  let counter = 1;
  setInterval(() => {
    images[counter - 1].classList.remove("show");
    if (!images[counter]) counter = 0;
    images[counter].classList.add("show");
    counter++;
  }, 3000);
};