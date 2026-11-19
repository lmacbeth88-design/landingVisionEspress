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

const contactForm = document.querySelector('#contact-form')
const formStatus = document.querySelector('#form-status')

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const submitButton = contactForm.querySelector('button[type="submit"]')
    submitButton.disabled = true
    submitButton.textContent = 'Enviando...'
    formStatus.className = 'hidden text-center text-sm'

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('No se pudo enviar el formulario')
      }

      contactForm.reset()
      formStatus.textContent = 'Gracias. Hemos recibido tus datos y te contactaremos para agendar la demostración.'
      formStatus.className = 'text-center text-sm text-emerald-400'
    } catch (error) {
      formStatus.textContent = 'No se pudo enviar. Inténtalo de nuevo o escríbenos por WhatsApp.'
      formStatus.className = 'text-center text-sm text-red-400'
    } finally {
      submitButton.disabled = false
      submitButton.textContent = 'Agendar demostración express'
    }
  })
}
