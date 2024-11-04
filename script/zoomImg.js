// document.addEventListener("DOMContentLoaded", function () {
//   const image = document.querySelectorAll(".diagrama-contexto-img");
//
//   image.addEventListener("click", function () {
//     if (window.innerWidth < 768) {
//       const overlay = document.createElement("div");
//       overlay.classList.add("zoom-overlay");
//
//       const zoomedImage = document.createElement("img");
//       zoomedImage.src = image.src;
//       overlay.appendChild(zoomedImage);
//
//       overlay.addEventListener("click", function () {
//         document.body.removeChild(overlay);
//       });
//
//       document.body.appendChild(overlay);
//     }
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".diagrama-contexto-img");

  images.forEach(function (image) {
    image.addEventListener("click", function () {
      if (window.innerWidth < 768) {
        const overlay = document.createElement("div");
        overlay.classList.add("zoom-overlay");

        const zoomedImage = document.createElement("img");
        zoomedImage.src = image.src;
        overlay.appendChild(zoomedImage);

        overlay.addEventListener("click", function () {
          document.body.removeChild(overlay);
        });

        document.body.appendChild(overlay);
      }
    });
  });
});
