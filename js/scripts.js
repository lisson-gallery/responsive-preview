//
// Exhibitions > Previous toggle
//

var toggle = document.getElementById("toggle-previous-exhibitions"),
    container = document.getElementById("previous-exhibitions");

toggle.addEventListener("click", function(){
  if (container.style.display == 'none') {
    container.style.display = 'grid';
  } else {
    container.style.display = 'none';
  }
}, false);

var toggle = document.getElementById("toggle-previous-exhibitions-2"),
    container = document.getElementById("previous-exhibitions");

toggle.addEventListener("click", function(){
  if (container.style.display == 'none') {
    container.style.display = 'grid';
  } else {
    container.style.display = 'none';
  }
}, false);