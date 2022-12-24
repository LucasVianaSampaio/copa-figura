let isIgnite = true
function chageCard(event) {
  const card = event.currentTarget
  const bg = isIgnite ? 'explorer' : 'ignite'
  isIgnite = !isIgnite
  card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}
