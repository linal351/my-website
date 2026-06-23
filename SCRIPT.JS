
// OPEN VIDEO MODAL
function openVideo(file) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("source").src = file;
  document.getElementById("player").load();

  localStorage.setItem("lastVideo", file);
}

// CLOSE VIDEO
function closeVideo() {
  document.getElementById("modal").style.display = "none";
}

// THEME TOGGLE
function toggleTheme() {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.className);
}

// LOAD SAVED SETTINGS
window.onload = function() {
  let theme = localStorage.getItem("theme");
  if (theme === "light") {
    document.body.classList.add("light");
  }

  let last = localStorage.getItem("lastVideo");
  if (last) {
    console.log("Last watched:", last);
  }
};

// SEARCH FILTER
document.getElementById("search").addEventListener("input", function() {
  let value = this.value.toLowerCase();
  let cards = document.querySelectorAll(".video-card");

  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(value)
      ? "block"
      : "none";
  });
});
