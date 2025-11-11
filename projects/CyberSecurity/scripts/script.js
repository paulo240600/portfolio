/*
  Student Name: Ngan Dinh
  File Name: script.js
  Date: 11/09/2025
  Description: Enables show/hide info buttons.
*/

document.addEventListener("DOMContentLoaded", function () {
  const info = document.getElementById("club-info");
  const showBtn = document.getElementById("show-btn");
  const hideBtn = document.getElementById("hide-btn");

  // Start with info hidden
  info.classList.add("hidden");

  showBtn.addEventListener("click", function () {
    info.classList.remove("hidden");
  });

  hideBtn.addEventListener("click", function () {
    info.classList.add("hidden");
  });
});
