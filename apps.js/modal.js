const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const medium = window.matchMedia(`(max-width:767px)`);
const dw = document.querySelector("#DW");

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key.toLowerCase() === "h") {
    event.preventDefault();
    toggleModal();
  }
});

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

function hideDw() {
  dw.innerHTML = "<h2 style= font-size:2rem>Alunos</h2>";
}

function showDw() {
  dw.innerHTML = `<h2 id="DW">Desenvolvimento web 1</h2>`
}

const changeSize = mql => {
  medium.matches
    ? hideDw()
    : showDw()
}

medium.addListener(changeSize)
changeSize(medium)