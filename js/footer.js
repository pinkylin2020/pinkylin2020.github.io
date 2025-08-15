import { redes } from './redes.js'
import { register } from './register.js'

export const footer = document.getElementById('footer')
footer.className = 'footer_container'

footer.append(
  redes,
  register,
)