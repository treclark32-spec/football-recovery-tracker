
let activityCount = Number(localStorage.getItem("activityCount")) || 0;

const recoveryForm = document.getElementById("recovery-form");
const filmForm = document.getElementById("film-form");

const readinessDisplay = document.getElementById("readiness-display");
const sorenessDisplay = document.getElementById("soreness-display");
const activityDisplay = document.getElementById("activity-count");
const filmList = document.getElementById("film-list");

// Load saved recovery information
const savedReadiness = localStorage.getItem("readiness");
const savedSoreness = localStorage.getItem("soreness");

if (savedReadiness) {
  readinessDisplay.textContent = savedReadiness + "/10";
}

if (savedSoreness) {
  sorenessDisplay.textContent = savedSoreness + "/10";
}

activityDisplay.textContent = activityCount + " activities logged";

// Load saved film notes
let filmNotes = JSON.parse(localStorage.getItem("filmNotes")) || [];

function displayFilmNotes() {
  filmList.innerHTML = "";

  filmNotes.forEach(function(note) {
    const listItem = document.createElement("li");
    listItem.textContent = note;
    filmList.appendChild(listItem);
  });
}

displayFilmNotes();

// Save recovery check-ins
recoveryForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const readiness = document.getElementById("readiness").value;
  const soreness = document.getElementById("soreness").value;
  const activity = document.getElementById("activity").value.trim();

  localStorage.setItem("readiness", readiness);
  localStorage.setItem("soreness", soreness);

  readinessDisplay.textContent = readiness + "/10";
  sorenessDisplay.textContent = soreness + "/10";

  if (activity !== "") {
    activityCount++;
    localStorage.setItem("activityCount", activityCount);
    activityDisplay.textContent = activityCount + " activities logged";
  }

  alert("Recovery check-in saved!");
  recoveryForm.reset();
});

// Save film notes
filmForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const notes = document.getElementById("film-notes").value.trim();

  if (notes === "") return;

  filmNotes.push(notes);
  localStorage.setItem("filmNotes", JSON.stringify(filmNotes));

  displayFilmNotes();

  alert("Film notes saved!");
  filmForm.reset();
});
