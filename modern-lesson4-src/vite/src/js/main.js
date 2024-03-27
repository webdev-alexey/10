import "normalize.css";
import "./../css/main.css";

document.addEventListener("DOMContentLoaded", function () {
  let gridBox = document.querySelector(".gallery");
  let bigImg = document.querySelector(".gallery__item--big .gallery__pic");

  function setRatio() {
    gridBox.style.setProperty("--bigW", bigImg.naturalWidth);
    gridBox.style.setProperty("--bigH", bigImg.naturalHeight);
  }

  if (bigImg.naturalWidth > 0) {
    setRatio();
  } else {
    bigImg.addEventListener("load", function () {
      setRatio();
    });
  }
});
