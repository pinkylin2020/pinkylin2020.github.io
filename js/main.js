import { header } from './header.js'
import { section } from './section.js'
import { footer } from './footer.js'

const root = document.getElementById('root')

root.append(header, section, footer)
