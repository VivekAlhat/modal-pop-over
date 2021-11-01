import "./styles.css";

const show_modal_btn = document.querySelector("#show__modal");
const close_modal_btn = document.querySelector("#close__modal");
const modal = document.querySelector("#modal");

window.addEventListener("load", () => {
  if (modal.classList.contains("inactive")) {
    document.body.style.backgroundColor = "white";
  }
});

close_modal_btn.addEventListener("click", () => {
  modal.classList.toggle("inactive");
  show_modal_btn.classList.toggle("hide");
  document.body.style.backgroundColor = "white";
});

show_modal_btn.addEventListener("click", () => {
  modal.classList.toggle("inactive");
  show_modal_btn.classList.toggle("hide");
  document.body.style.backgroundColor = "grey";
});
