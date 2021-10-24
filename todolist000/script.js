"use strict";

// Create a new list item when clicking on the "Add" button
function newGoal() {
  const li = document.createElement("li");
  let textContent = document.getElementById("myInput").value;
  const t = document.createTextNode(textContent);
  li.appendChild(t);
  if (textContent === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  let txtx = txt.slice(0, -1);
  span.className = "close";
  span.appendChild(txtx);
  li.appendChild(span);
}
