import Calculator from './Calculator.js'

const KEY = 'Calculator-App-Main'

const div = document.querySelector(":root")
const theme = document.querySelector("[data-theme]")
const toggle = document.querySelector("[data-toggle]")

const storageTheme = localStorage.getItem(`${KEY}-theme`)
storageTheme && setTheme(storageTheme)

toggle.addEventListener("click", () => setTheme(theme.dataset.theme % 3 + 1))

function setTheme(n) {
  theme.dataset.theme = n
  div.classList.remove("theme1","theme2","theme3")
  div.classList.add(`theme${theme.dataset.theme}`)
  localStorage.setItem(`${KEY}-theme`, theme.dataset.theme)
}

const screen = document.querySelector("[data-screen]")
const keypad = document.querySelector("[data-keypad")

const calculator = new Calculator(screen)

keypad.addEventListener("click", e => {
  if (!e.target.matches("[data-button")) return 
  const button = e.target.dataset.button
  calculator.input(button)
})

