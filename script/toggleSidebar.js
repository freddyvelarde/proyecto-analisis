function toggleSidebar() {
  console.log("toggle to top function triggered"); // For debugging
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
}
function scrollToTop() {
  console.log("Scroll to top function triggered"); // For debugging
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
