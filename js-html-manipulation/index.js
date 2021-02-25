// let addGameToList = function(game) {
//   let contentTag = document.getElementById("content")
//   let newParagraph = document.createElement("p")
//   newParagraph.innerHTML = game;
//   contentTag.appendChild(newParagraph)
// }

// let games = ["The Witcher 3", "Street Fighter V", "Fallout"]

// games.forEach(game => addGameToList(game))

let addGameToList = function(gameDescription) {
  let contentTag = document.getElementById("content")
  let newParagraph = document.createElement("p")
  newParagraph.innerHTML = gameDescription;
  contentTag.appendChild(newParagraph)
}

let games = [
  { title: "The Witcher 3", genre: "RPG", rating: "10"},
  { title: "Street Fighter V", genre: "Fighting", rating: "10"},
  { title: "Fallout", genre: "RPG", rating: "8"}
]

let rpgs = games.filter(game => {
  if (game.genre === "RPG") {
    return true
  } else {
    return false
  }
});

let rpgsWithRating = rpgs.map(game => {
  return `${game.title} - ${game.rating}/10`
})

rpgsWithRating.forEach(gameDescription => addGameToList(gameDescription))