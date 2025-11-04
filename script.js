const savedNameDiv = document.getElementById("savedName")
const nameInput = document.getElementById("nameInput")
const saveBtn = document.getElementById("saveBtn")
const removeBtn = document.getElementById("removeBtn")
const form = document.querySelector("form")

// Funzione per aggiornare la visualizzazione
const showSavedName = function () {
  const savedName = localStorage.getItem("username")
  if (savedName) {
    savedNameDiv.innerText = "Nome salvato: " + savedName
  } else {
    savedNameDiv.innerText = ""
  }
}

// Al click sul pulsante Salva
saveBtn.addEventListener("click", () => {
  const nameValue = nameInput.value
  if (nameValue) {
    localStorage.setItem("username", nameValue)
    showSavedName()
  }
  form.reset()
})

// Al click sul pulsante Rimuovi
removeBtn.addEventListener("click", () => {
  localStorage.removeItem("username")
  showSavedName()
})

// Mostra il nome salvato quando la pagina viene caricata
showSavedName()

//Timer
const timerSpan = document.getElementById("timer")

// Recupera il valore salvato o parte da zero
let secondsPassed = sessionStorage.getItem("seconds") || 0
timerSpan.innerText = secondsPassed

setInterval(() => {
  secondsPassed++
  timerSpan.innerText = secondsPassed
  sessionStorage.setItem("seconds", secondsPassed)
}, 1000)
