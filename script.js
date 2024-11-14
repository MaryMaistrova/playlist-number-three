let arrayWithImages = []
const collection = document.getElementsByTagName("li")
for (let i = 0; i < collection.length; i++) {
  arrayWithImages.push(collection[i])
}

const btn = document.getElementById("songChooser")

btn.addEventListener("click", function randomizer() {
  let randomSongPromo = arrayWithImages[Math.floor(Math.random() * arrayWithImages.length)];
  document.getElementById("songBlock").append(randomSongPromo);

  btn.style.transition = "500ms"
  btn.style.pointerEvents = "none"
  btn.style.backgroundColor = "rgb(84, 86, 87)"
  btn.style.color = "gray"
  btn.style.fontSize = "16px"
  btn.innerText = "A second drink at the well in one day will not help you."
}
)