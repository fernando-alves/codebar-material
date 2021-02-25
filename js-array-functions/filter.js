const allBagsContent = {
  'bright white': ['shiny gold'],
  'muted yellow': ['shiny gold', 'faded blue'],
  'shiny gold': ['dark olive', 'vibrant plum'],
  'faded blue': [],
  'blue marino': ['bright white'],
  'dark olive': [],
  'vibrant plum': []
}

//currentBag = muted yellow
//target = shiny gold
const includes = (bag, targetBag) => allBagsContent[bag].includes(targetBag) || allBagsContent[bag].some(bag => includes(bag, targetBag))

const countBags = targetBag => Object.keys(allBagsContent).filter(bag => includes(bag, targetBag)).length

console.log(includes('muted yellow', 'shiny gold'))
console.log(includes('bright white', 'shiny gold'))
console.log(includes('bright white', 'muted yellow'))
console.log(includes('shiny gold', 'shiny gold'))
console.log(includes('blue marino', 'shiny gold'))

console.log(countBags('shiny gold'))