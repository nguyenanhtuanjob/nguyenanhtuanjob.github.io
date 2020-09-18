var ticket = document.querySelectorAll(".ticket__item");
var dropDow = document.querySelectorAll(".ticket__dropdow");
for (let i = 0; i < ticket.length; i++) {
  ticket[i].addEventListener("click", function () {
    var index = i;
    console.log(index);
    dropDow[i].classList.toggle("ticket__show--drop");
    for (let j = 0; j < dropDow.length; j++) {
      if (j != index) {
        dropDow[j].classList.remove("ticket__show--drop");
      }
    }
  });
}
