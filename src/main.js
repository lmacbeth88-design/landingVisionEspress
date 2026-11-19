import './style.css'

const cards = document.querySelectorAll('.card')

cards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    card.style.setProperty('--x', `${x}px`)
    card.style.setProperty('--y', `${y}px`)
  })

  card.addEventListener('mouseleave', () => {
    card.style.removeProperty('--x')
    card.style.removeProperty('--y')
  })
})

const buttons = document.querySelectorAll('.btn-primary')

buttons.forEach((button) => {
  button.addEventListener('mousemove', (event) => {
    const rect = button.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    button.style.setProperty('--x', `${x}px`)
    button.style.setProperty('--y', `${y}px`)
  })

  button.addEventListener('mouseleave', () => {
    button.style.removeProperty('--x')
    button.style.removeProperty('--y')
  })
})
