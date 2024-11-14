let arrayWithImages = []
const collection = document.getElementsByClassName("song")
for (let i = 0; i < collection.length; i++) {
  arrayWithImages.push(collection[i])
}

const btn = document.getElementById("songChooser")

btn.addEventListener("click", function randomizer() {
  document.getElementById("songBlock").firstElementChild.remove()
  let randomSongPromo = arrayWithImages[Math.floor(Math.random() * arrayWithImages.length)];
  document.getElementById("songBlock").append(randomSongPromo)
}
)