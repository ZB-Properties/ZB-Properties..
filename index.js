
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n. addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))


 const steps = Array.from(document.querySelectorAll("form .step"));
 const nextBtn = document.querySelectorAll("form .next-btn");
 const prevBtn = document.querySelectorAll("form .previous-btn");
 const form = document.querySelector("form");
   nextBtn.forEach((button) => {
    button.addEventListener("click", () => {
    changeStep("next");
	});
   });
   prevBtn.forEach((button) => {
    button.addEventListener("click", () => {
	 changeStep("prev");
	 });
	});
  form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
	inputs.push({ name, value });
   });
   console.log(inputs);
   form.reset();
  });
  function changeStep(btn) {
   let index = 0;
   const active = document.querySelector(".active");
   index = steps.indexOf(active);
   steps[index].classList.remove("active");
   if (btn === "next") {
    index++;
   }
   else if (btn === "prev") {
    index--;
   }
   steps[index].classList.add("active");
  }


const viewBtns = document.querySelectorAll(
  ".viewBtn"
);

  viewBtns.forEach((viewBtn) => {
   viewBtn.addEventListener("click", () => {
      window.location.replace("Specific property 1.html");
    });
  });

const updateForm = document.querySelector("#updateForm");
const updateBtn = document.querySelector("#updateBtn");

updateBtn.addEventListener("click", e => {
    e.preventDefault();
	window.location.replace("Specific property 1.html");
   updateForm.classList.add("sp-hide");
  });

var modal = document.getElementById("myModal");
 var btn = document.getElementById("deletePropertyBtn");

 btn.onclick = function() {
  modal.style.display = "block";
 }

  yesBtn.addEventListener("click", e => {
    e.preventDefault();
	window.location.replace("My property list.html");
  });

noBtn.addEventListener("click", e => {
    e.preventDefault();
	window.location.replace("Specific property 1.html");
  });

  window.onclick = function(event) {
  if (event.target == modal) {
   modal.style.display = "none";
  }
 }