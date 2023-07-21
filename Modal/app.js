const openButton = document.getElementById("open");
const modal = document.querySelector(".modal");
const closeButton = modal.querySelector("button");
const openModal = () => {
  modal.classList.remove("hidden");
};
const closeModal = () => {
  modal.classList.add("hidden");
};
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
