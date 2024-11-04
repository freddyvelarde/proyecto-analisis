document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector(".diagrama-contexto-img");

  image.addEventListener("click", function () {
    if (window.innerWidth < 768) {
      // Only trigger on mobile view
      const overlay = document.createElement("div");
      overlay.classList.add("zoom-overlay");

      const zoomedImage = document.createElement("img");
      zoomedImage.src = image.src;
      overlay.appendChild(zoomedImage);

      overlay.addEventListener("click", function () {
        document.body.removeChild(overlay); // Close overlay on click
      });

      document.body.appendChild(overlay);
    }
  });
});
