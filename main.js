let searchBtn = document.getElementById("search");
let inputField = document.getElementById('input');

searchBtn.addEventListener("click", () => {
  if (inputField.style.width === "0px") { 
    inputField.style.width = "50%";
    inputField.style.padding = "1px 2px";
  } else {
    inputField.style.width = "0";
    inputField.style.padding = "0";
  }
  document.querySelector("input[type='search']").focus();
});

document.addEventListener("click", (e) => {
  if (
    e.target == searchBtn ||
    e.target == document.querySelector("input[type='search']")
  )
    return;
  inputField.style.width = "0";
  inputField.style.padding = "0";
});
