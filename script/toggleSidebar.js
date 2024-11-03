function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
