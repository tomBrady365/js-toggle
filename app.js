function toggle() {
  // two vars for the css and text manipulation
  let element = document.getElementById("myDIV");
  let linkText = element.getElementsByTagName("h1")[0];

  // Change link.text
  var newLinkText =
    linkText.innerText == "Open"
      ? (linkText.innerText = "Close")
      : (linkText.innerText = "Open");

  // change css.style
  element.classList.toggle("mystyle");

  // console.log('tt' + linkText.innerHTML);
  console.log("text: " + newLinkText);
}

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
