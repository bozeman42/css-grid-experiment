const items = document.getElementById('items')

setInterval(() => {
  const newItem = document.createElement('div')
  newItem.classList.add('item')
  items.appendChild(newItem)
}, 1000)