/*
 * @praboth 2023
 */

// this use to catch .burger-button element
const burger = document.querySelector("#burger-button");

// in this line add event listener to .burger-button class element for the catch if click on the element
burger.addEventListener("click", function () {

    // if click on burger button active class add or remove (toggle) these elements, using these lines
    document.querySelector(".burger").classList.toggle("active");
    document.querySelector(".nav-content").classList.toggle("active");
    document.querySelector(".burger-button").classList.toggle("active");
});
