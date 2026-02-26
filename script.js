function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  // mesma foto nos dois modos (foto real do João)
  img.setAttribute("src", "./assets/avatar.jpg")
}
