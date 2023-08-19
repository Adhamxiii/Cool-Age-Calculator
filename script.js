"use strict";

const dayIn = document.getElementById("dayIn");
const monthIn = document.getElementById("monthIn");
const yearIn = document.getElementById("yearIn");
const yearRe = document.getElementById("yearRe");
const monthRe = document.getElementById("monthRe");
const dayRe = document.getElementById("dayRe");
const btn = document.querySelector("button");
const input = document.querySelectorAll(".input");

btn.addEventListener("click", () => {
  const day = parseInt(dayIn.value);
  const month = parseInt(monthIn.value) - 1;
  const year = parseInt(yearIn.value);
  const inputDate = new Date(year, month, day);

  if (isNaN(day) || day < 1 || day > 31) {
    const errorDay = document.querySelector(".error-day");
    errorDay.textContent = "Must be a valid day.";
    errorDay.classList.add("error");
    input[0].classList.add("error-input");
    return;
  }

  if (isNaN(month) || month < 1 || month > 12) {
    const errorMonth = document.querySelector(".error-month");
    errorMonth.textContent = "Must be a valid month.";
    errorMonth.classList.add("error");
    input[1].classList.add("error-input");
    return;
  }

  if (isNaN(year) || year < 1900 || year > 2023) {
    const errorYear = document.querySelector(".error-year");
    errorYear.textContent = "Must be a valid year.";
    errorYear.classList.add("error");
    input[2].classList.add("error-input");
    return;
  }

  const currentDate = new Date();
  const ageInMillis = currentDate - inputDate;

  const yearsDiff = Math.floor(ageInMillis / (365.25 * 24 * 60 * 60 * 1000));
  const monthsDiff = Math.floor(
    (ageInMillis % (365.25 * 24 * 60 * 60 * 1000)) /
      (30.44 * 24 * 60 * 60 * 1000)
  );
  const daysDiff = Math.floor(
    (ageInMillis % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );

  yearRe.textContent = yearsDiff;
  monthRe.textContent = monthsDiff;
  dayRe.textContent = daysDiff;
});
