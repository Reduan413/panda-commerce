//set heading color
const h2 = document.getElementsByTagName("h2");
for (var i = 0; i < h2.length; i++) {
  h2[i].style.color = "blue";
}

//card border radius
const card = document.getElementsByClassName("card");
for (var i = 0; i < card.length; i++) {
  card[i].style.borderRadius = "30px";
}

//delete buttons
const items = document.getElementsByClassName("cardBtn");
for (const item of items) {
  item.addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });
}

///submit button diseble or active
document
  .getElementById("submit-confirm")
  .addEventListener("keyup", function (e) {
    const submitBtn = document.getElementById("button-addon2");
    if (e.target.value == "email") {
      submitBtn.removeAttribute("disabled");
    } else {
      submitBtn.setAttribute("disabled", true);
    }
  });

//image hover
const images = document.getElementsByTagName("img");
for (const image of images) {
  image.addEventListener("mouseover", function (event) {
    event.target.style.transform = "rotate(20deg) scale(1.2)";
  });
  image.addEventListener("mouseout", function (event) {
    event.target.style.transform = "";
  });
}

//change background color using double click
const element = document.getElementById("content");
element.addEventListener("dblclick", function(){
    element.style.backgroundColor = "#e28480";
});
