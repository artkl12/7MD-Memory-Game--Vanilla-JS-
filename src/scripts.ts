const cardColors = [
  "cyan",    
  "deeppink",   
  "chartreuse",  
  "orangered",
  "cyan",
  "deeppink",
  "orangered",
  "blue",
  "violet",  
  "chartreuse",
  "blue",
  "violet"  
];
let colorsMix = cardColors.sort(() => (Math.random() > 0.5 ? 2 : -1));


for (let i = 0; i < cardColors.length; i++) {
  let box = document.createElement("div");
  box.className = "card";
  box.style.backgroundColor = colorsMix[i];
  box.innerHTML = colorsMix[i];
  box.onclick = function () {
    (this as HTMLElement).classList.add("boxOpen");
    setTimeout(function () {
      if (document.querySelectorAll(".boxOpen").length > 1) {
        if (
          document.querySelectorAll(".boxOpen")[0].innerHTML ===
          document.querySelectorAll(".boxOpen")[1].innerHTML
        ) {
          document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
          if (document.querySelectorAll(".boxMatch").length === cardColors.length) {
            alert("Win!");
          }
        } else {
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
        }
      }
    }, 500);
  };
  document.querySelector(".game").appendChild(box);
}

const btn = document.getElementById("btn") as HTMLButtonElement;
btn.addEventListener("click", () => {
  window.location.reload();
});
