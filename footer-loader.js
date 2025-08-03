// Load footer into the page
document.addEventListener("DOMContentLoaded", function () {
  loadFooter();
});

function loadFooter() {
  fetch("footer.html")
    .then((response) => response.text())
    .then((html) => {
      // Insert footer before closing body tag
      const body = document.body;
      body.insertAdjacentHTML("beforeend", html);
    })
    .catch((error) => {
      console.error("Error loading footer:", error);
    });
}
