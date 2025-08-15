import { logo_container } from './header/logo.js'
import { icono_up } from './header/icono_up.js'
import { add_phone } from './header/add_phone.js'
import { nav_container } from './header/navegacion.js'

export const header = document.querySelector('#header')
header.className = 'header_container'

header.append(
  logo_container,
  add_phone,
  icono_up,
  nav_container,
)
